@echo off
echo Stopping Food Truck Application Servers...
echo.

REM Kill all node processes (stops both backend and frontend)
taskkill /F /IM node.exe 2>nul

if %ERRORLEVEL% EQU 0 (
    echo Successfully stopped all servers!
) else (
    echo No servers were running.
)

echo.
pause
