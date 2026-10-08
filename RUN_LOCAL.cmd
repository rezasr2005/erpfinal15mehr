@echo off
setlocal
cd /d "%~dp0source"
where node >nul 2>nul
if errorlevel 1 goto missing_node
node -e "const [major,minor]=process.versions.node.split('.').map(Number); process.exit(major>22 || (major===22 && minor>=12) ? 0 : 1)"
if errorlevel 1 goto missing_node
if not exist "apps\web\.env.local" copy "apps\web\.env.example" "apps\web\.env.local" >nul
call npx --yes pnpm@11.19.0 install --frozen-lockfile
if errorlevel 1 goto failed
echo Open http://localhost:3000/fa or http://localhost:3000/en
echo Press Ctrl+C to stop the local server.
call npx --yes pnpm@11.19.0 --filter @kavian/web dev --hostname 127.0.0.1
if errorlevel 1 goto failed
exit /b 0
:missing_node
echo Install Node.js 22.12 or newer, then run this file again.
pause
exit /b 1
:failed
echo Local startup failed. Keep the error above and share it for troubleshooting.
pause
exit /b 1
