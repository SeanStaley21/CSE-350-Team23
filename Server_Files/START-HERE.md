# Food Truck App Launcher

Two scripts to start both backend and frontend servers:

## Option 1: PowerShell Script (Recommended)

**Run:**
```powershell
.\start-servers.ps1
```

## Option 2: Batch File

**Double-click** `start-servers.bat` or run:
```cmd
start-servers.bat
```

## What They Do:

1. Start the backend server (Node.js/Express) at `http://localhost:5000`
2. Start the frontend server (React/Vite) at `http://localhost:3000`
3. Open both in separate terminal windows

## To Stop Servers:

Close the terminal windows or press `Ctrl+C` in each window.

## First Time Setup:

Before running the launcher, make sure you've installed dependencies:

```powershell
cd Backend
npm install
cd ../Frontend
npm install
```

Then you can use the launcher anytime!
