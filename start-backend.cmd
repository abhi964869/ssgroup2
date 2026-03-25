@echo off
setlocal

cd /d "%~dp0backend"

if not exist node_modules (
  echo Installing backend dependencies...
  call npm.cmd install
)

if not exist .env (
  echo Warning: backend\.env is missing.
  echo Create backend\.env from backend\.env.example and add your Gmail EMAIL_USER and EMAIL_PASS for email delivery.
)

echo Starting backend on http://localhost:5000
node index.js
