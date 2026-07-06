# Render first page of each website PDF to PNG using Windows WinRT (status polling)

$null = [Windows.Storage.StorageFile, Windows.Storage, ContentType=WindowsRuntime]
$null = [Windows.Data.Pdf.PdfDocument, Windows.Data.Pdf, ContentType=WindowsRuntime]
$null = [Windows.Storage.Streams.InMemoryRandomAccessStream, Windows.Storage.Streams, ContentType=WindowsRuntime]
$null = [Windows.Data.Pdf.PdfPageRenderOptions, Windows.Data.Pdf, ContentType=WindowsRuntime]

function WinRtWait($asyncOp) {
    while ($asyncOp.Status -eq 0) { [System.Threading.Thread]::Sleep(30) }
    if ($asyncOp.Status -eq 3) { throw $asyncOp.ErrorCode }
    return $asyncOp.GetResults()
}

function RenderPdfPage($pdfPath, $outPng, $width) {
    $file    = WinRtWait([Windows.Storage.StorageFile]::GetFileFromPathAsync($pdfPath))
    $doc     = WinRtWait([Windows.Data.Pdf.PdfDocument]::LoadAsync($file))
    $page    = $doc.GetPage(0)
    $stream  = [Windows.Storage.Streams.InMemoryRandomAccessStream]::new()
    $options = [Windows.Data.Pdf.PdfPageRenderOptions]::new()
    $options.DestinationWidth = $width
    WinRtWait($page.RenderToStreamAsync($stream, $options)) | Out-Null
    $netStream = [System.IO.WindowsRuntimeStreamExtensions]::AsStreamForRead($stream)
    $bytes = New-Object byte[] $stream.Size
    $netStream.Read($bytes, 0, $bytes.Length) | Out-Null
    [System.IO.File]::WriteAllBytes($outPng, $bytes)
    return $bytes.Length
}

$pdfs = @(
    @{ src="C:\Users\tstefanou\Desktop\Timonas\Portfolio Update\Websites\North Tide\NorthTide Landing Page Single Page V4.pdf";                                                                       dst="C:\Users\tstefanou\Portfolio\portfolio-pro\public\work\northtide\cover.tmp.png" },
    @{ src="C:\Users\tstefanou\Desktop\Timonas\Portfolio Update\Websites\North Tide\NorthTide Landing Page Single Page Tablet.pdf";                                                                    dst="C:\Users\tstefanou\Portfolio\portfolio-pro\public\work\northtide\tablet.tmp.png" },
    @{ src="C:\Users\tstefanou\Desktop\Timonas\Portfolio Update\Websites\North Tide\NorthTide Landing Page Single Page Mobile Phone.pdf";                                                              dst="C:\Users\tstefanou\Portfolio\portfolio-pro\public\work\northtide\mobile.tmp.png" },
    @{ src="C:\Users\tstefanou\Desktop\Timonas\Portfolio Update\Websites\Fameline Mission Solutions\Fameline Mission Solutions Landinge Page Single page.pdf";                                         dst="C:\Users\tstefanou\Portfolio\portfolio-pro\public\work\fameline-web\cover.tmp.png" },
    @{ src="C:\Users\tstefanou\Desktop\Timonas\Portfolio Update\Websites\Fameline Mission Solutions\Fameline Mission Solutions Landinge Page Single page Mobile Phone.pdf";                            dst="C:\Users\tstefanou\Portfolio\portfolio-pro\public\work\fameline-web\mobile.tmp.png" },
    @{ src="C:\Users\tstefanou\Desktop\Timonas\Portfolio Update\Websites\Mia Femtech\Mia Femtech Landing Page Single Page v2.pdf";                                                                    dst="C:\Users\tstefanou\Portfolio\portfolio-pro\public\work\mia-web\cover.tmp.png" },
    @{ src="C:\Users\tstefanou\Desktop\Timonas\Portfolio Update\Websites\Mia Femtech\Mia Femtech Landing Page Single Page Guidelines Tablet v2.pdf";                                                  dst="C:\Users\tstefanou\Portfolio\portfolio-pro\public\work\mia-web\tablet.tmp.png" },
    @{ src="C:\Users\tstefanou\Desktop\Timonas\Portfolio Update\Websites\Mia Femtech\Mia Femtech Landing Page Single Page Guidelines Mobile v2.pdf";                                                  dst="C:\Users\tstefanou\Portfolio\portfolio-pro\public\work\mia-web\mobile.tmp.png" },
    @{ src="C:\Users\tstefanou\Desktop\Timonas\Portfolio Update\Websites\Landing Page - Albaflux v2.pdf";                                                                                            dst="C:\Users\tstefanou\Portfolio\portfolio-pro\public\work\albaflux-web\cover.tmp.png" }
)

$ok = 0; $fail = 0
foreach ($item in $pdfs) {
    if (-not (Test-Path $item.src)) { Write-Host "MISSING: $($item.src)"; $fail++; continue }
    New-Item -ItemType Directory -Path (Split-Path $item.dst) -Force | Out-Null
    try {
        $sz = RenderPdfPage $item.src $item.dst 1920
        Write-Host "  OK  $([math]::Round($sz/1KB))KB  $(Split-Path $item.dst -Leaf)"
        $ok++
    } catch {
        Write-Host "  ERR: $(Split-Path $item.dst -Leaf) - $_"
        $fail++
    }
}
Write-Host "`n$ok rendered, $fail failed."
