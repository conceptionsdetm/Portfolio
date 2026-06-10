$ErrorActionPreference = "Stop"
$projectDir = "C:\Users\tstefanou\Portfolio\portfolio-pro"
Set-Location $projectDir

# Check for staged/unstaged changes (ignore untracked helper scripts)
$status = git status --porcelain 2>$null | Where-Object { $_ -match "^[MADRCU ]?[MADRCU]" }
if (-not $status) {
    Write-Output "[auto-sync] No tracked changes — skipping."
    exit 0
}

Write-Output "[auto-sync] Changes detected, building..."

# Build
$env:PATH = "C:\Users\tstefanou\AppData\Local\node-portable\node-v22.16.0-win-x64;" + $env:PATH
$buildResult = & npx next build 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Output "[auto-sync] Build failed — not pushing."
    Write-Output $buildResult
    exit 1
}

# Stage tracked + modified files only (skip loose .mjs helpers)
git add src/ public/ 2>$null
git add --update

# Only commit if there's something staged
$staged = git diff --cached --name-only
if (-not $staged) {
    Write-Output "[auto-sync] Nothing staged after add — skipping commit."
    exit 0
}

$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"
git commit -m "auto-sync: $timestamp"

# Read token
$tokenFile = "$projectDir\.claude\github-token.txt"
$token = ""
if ($env:GITHUB_TOKEN) {
    $token = $env:GITHUB_TOKEN.Trim()
} elseif (Test-Path $tokenFile) {
    $token = (Get-Content $tokenFile -Raw).Trim()
}

if (-not $token) {
    Write-Output "[auto-sync] No GitHub token found. Add token to .claude\github-token.txt or set GITHUB_TOKEN env var."
    exit 1
}

git remote set-url origin "https://${token}@github.com/conceptionsdetm/Portfolio.git"
git push origin main
git remote set-url origin "https://github.com/conceptionsdetm/Portfolio.git"
Write-Output "[auto-sync] Pushed to GitHub."
