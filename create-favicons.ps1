Add-Type -AssemblyName System.Drawing

$logoPath = Join-Path $PSScriptRoot "images\logo.png"
$favicon32Path = Join-Path $PSScriptRoot "images\favicon-32x32.png"
$favicon16Path = Join-Path $PSScriptRoot "images\favicon-16x16.png"

$original = [System.Drawing.Image]::FromFile($logoPath)
Write-Host "Original size: $($original.Width)x$($original.Height)"

# Create 32x32 favicon
$bmp32 = New-Object System.Drawing.Bitmap(32, 32)
$g32 = [System.Drawing.Graphics]::FromImage($bmp32)
$g32.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g32.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g32.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g32.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

# Calculate aspect-fit dimensions with padding
$ratio = [Math]::Min(28 / $original.Width, 28 / $original.Height)
$newW = [int]($original.Width * $ratio)
$newH = [int]($original.Height * $ratio)
$x = [int]((32 - $newW) / 2)
$y = [int]((32 - $newH) / 2)

$g32.Clear([System.Drawing.Color]::Transparent)
$g32.DrawImage($original, $x, $y, $newW, $newH)
$bmp32.Save($favicon32Path, [System.Drawing.Imaging.ImageFormat]::Png)
$g32.Dispose()
$bmp32.Dispose()
Write-Host "Created favicon-32x32.png"

# Create 16x16 favicon
$bmp16 = New-Object System.Drawing.Bitmap(16, 16)
$g16 = [System.Drawing.Graphics]::FromImage($bmp16)
$g16.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g16.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g16.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g16.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

$ratio16 = [Math]::Min(14 / $original.Width, 14 / $original.Height)
$newW16 = [int]($original.Width * $ratio16)
$newH16 = [int]($original.Height * $ratio16)
$x16 = [int]((16 - $newW16) / 2)
$y16 = [int]((16 - $newH16) / 2)

$g16.Clear([System.Drawing.Color]::Transparent)
$g16.DrawImage($original, $x16, $y16, $newW16, $newH16)
$bmp16.Save($favicon16Path, [System.Drawing.Imaging.ImageFormat]::Png)
$g16.Dispose()
$bmp16.Dispose()

$original.Dispose()
Write-Host "Created favicon-16x16.png"
Write-Host "Done!"
