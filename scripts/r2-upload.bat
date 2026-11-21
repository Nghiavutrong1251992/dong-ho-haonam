@echo off
title Upload Anh Hao Nam Watch Care len Cloudflare R2
setlocal enabledelayedexpansion

set "RCLONE_PATH=F:\Cac-Du-An-Lap-Trinh\Xu-ly-anh-v2\bin\rclone.exe"
set "REMOTE_NAME=my-r2"
set "BUCKET_NAME=dong-ho-haonam"
set "LOCAL_PATH=%~dp0..\media"

echo ==================================================
echo   DANG DONG BO THU MUC ANH LEN CLOUDFLARE R2
echo   Nguon: %LOCAL_PATH%
echo   Dich : %REMOTE_NAME%:%BUCKET_NAME%
echo ==================================================

if not exist "%RCLONE_PATH%" (
    echo [LOI] Khong tim thay rclone.exe tai: %RCLONE_PATH%
    pause
    exit /b 1
)

if not exist "%LOCAL_PATH%" (
    echo [LOI] Thu muc nguon %LOCAL_PATH% khong ton tai!
    pause
    exit /b 1
)

"%RCLONE_PATH%" sync "%LOCAL_PATH%" "%REMOTE_NAME%:%BUCKET_NAME%" ^
    --progress ^
    --transfers 16 ^
    --checkers 32 ^
    --fast-list ^
    --buffer-size 64M

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ==================================================
    echo   THANH CONG! Anh da duoc dong bo len R2: %BUCKET_NAME%
    echo ==================================================
) else (
    echo.
    echo [LOI] Co loi xay ra trong qua trinh upload.
)

pause
