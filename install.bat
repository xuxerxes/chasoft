@echo off
chcp 65001 >nul
echo 🚀 Chasoft 快速启动脚本
echo =======================
echo.

REM 检查 Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ 未找到 Node.js，请先安装 Node.js 18+
    echo 下载地址: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js 版本: 
node -v
echo.

REM 检查 npm
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ 未找到 npm
    pause
    exit /b 1
)

echo ✅ npm 版本: 
npm -v
echo.

REM 安装依赖
echo 📦 安装依赖...
call npm install

if %errorlevel% equ 0 (
    echo.
    echo ✅ 依赖安装成功！
    echo.
    echo 📝 下一步：
    echo 1. 复制 .env.example 为 .env.local
    echo    copy .env.example .env.local
    echo.
    echo 2. 编辑 .env.local 文件，填写你的 API Keys
    echo.
    echo 3. 启动开发服务器
    echo    npm run dev
    echo.
    echo 🎉 开始使用 Chasoft 吧！
) else (
    echo.
    echo ❌ 依赖安装失败，请检查错误信息
    pause
    exit /b 1
)

pause
