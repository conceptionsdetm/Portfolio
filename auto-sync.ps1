$repo   = "C:\Users\HomePC\Portfolio"
$branch = "main"
$pollInterval = 300   # seconds between remote checks (5 min)
$debounce     = 15    # seconds to wait after last file change before pushing

Set-Location $repo

# ── Initial pull on startup ──────────────────────────────────────────────────
git pull origin $branch 2>&1 | Out-Null

# ── File watcher (auto-push on save) ─────────────────────────────────────────
$watcher                     = New-Object System.IO.FileSystemWatcher
$watcher.Path                = $repo
$watcher.IncludeSubdirectories = $true
$watcher.NotifyFilter        = [System.IO.NotifyFilters]::LastWrite -bor [System.IO.NotifyFilters]::FileName
$watcher.EnableRaisingEvents = $true

# Ignore git internals and temp files
$ignorePattern = '\\\.git\\|\.tmp$|\.swp$|Thumbs\.db'

$lastChange = [DateTime]::MinValue

$onChange = Register-ObjectEvent $watcher -EventName Changed -Action {
    $path = $Event.SourceEventArgs.FullPath
    if ($path -match $ignorePattern) { return }
    $global:lastChange = Get-Date
}
$onCreate = Register-ObjectEvent $watcher -EventName Created -Action {
    $path = $Event.SourceEventArgs.FullPath
    if ($path -match $ignorePattern) { return }
    $global:lastChange = Get-Date
}
$onDelete = Register-ObjectEvent $watcher -EventName Deleted -Action {
    $path = $Event.SourceEventArgs.FullPath
    if ($path -match $ignorePattern) { return }
    $global:lastChange = Get-Date
}
$onRename = Register-ObjectEvent $watcher -EventName Renamed -Action {
    $global:lastChange = Get-Date
}

# ── Main loop ─────────────────────────────────────────────────────────────────
$lastPoll   = Get-Date
$lastPushed = [DateTime]::MinValue

while ($true) {
    Start-Sleep -Seconds 5

    $now = Get-Date

    # Auto-push: if there was a change and debounce period has passed
    if ($lastChange -gt $lastPushed -and ($now - $lastChange).TotalSeconds -ge $debounce) {
        Set-Location $repo
        $status = git status --porcelain 2>&1
        if ($status) {
            $stamp = $now.ToString("yyyy-MM-dd HH:mm")
            git add -A 2>&1 | Out-Null
            git commit -m "auto-sync: $stamp" 2>&1 | Out-Null
            git push origin $branch 2>&1 | Out-Null
        }
        $lastPushed = $now
    }

    # Auto-pull: every 5 minutes, fetch and pull if remote is ahead
    if (($now - $lastPoll).TotalSeconds -ge $pollInterval) {
        Set-Location $repo
        git fetch origin $branch 2>&1 | Out-Null
        $behind = git rev-list HEAD..origin/$branch --count 2>&1
        if ($behind -match '^\d+$' -and [int]$behind -gt 0) {
            git pull origin $branch 2>&1 | Out-Null
        }
        $lastPoll = $now
    }
}
