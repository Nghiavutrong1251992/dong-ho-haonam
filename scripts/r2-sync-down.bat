@echo off
title Tai Anh tu Cloudflare R2 ve Thu muc media
setlocal enabledelayedexpansion

set "RCLONE_PATH=F:\Cac-Du-An-Lap-Trinh\Xu-ly-anh-v2\bin\rclone.exe"
set "REMOTE_NAME=my-r2"
set "BUCKET_NAME=dong-ho-haonam"
set "LOCAL_PATH=%~dp0..\media"

echo ==================================================
echo   DANG DONG BO ANH TU R2 VE MAY TINH
echo   Nguon: %REMOTE_NAME%:%BUCKET_NAME%
echo   Dich : %LOCAL_PATH%
echo ==================================================

if not exist "%RCLONE_PATH%" (
    echo [LOI] Khong tim thay rclone.exe tai: %RCLONE_PATH%
    pause
    exit /b 1
)

if not exist "%LOCAL_PATH%" (
    mkdir "%LOCAL_PATH%"
)

"%RCLONE_PATH%" copy "%REMOTE_NAME%:%BUCKET_NAME%" "%LOCAL_PATH%" ^
    --progress ^
    --transfers 16 ^
    --checkers 32 ^
    --fast-list ^
    --buffer-size 64M

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ==================================================
    echo   THANH CONG! Anh da duoc tai ve %LOCAL_PATH%
    echo ==================================================
) else (
    echo.
    echo [LOI] Co loi xay ra trong qua trinh dong bo.
)

pause
