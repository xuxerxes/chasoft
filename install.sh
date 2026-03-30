#!/bin/bash

echo "🚀 Chasoft 快速启动脚本"
echo "======================="
echo ""

# 检查 Node.js
if ! command -v node &> /dev/null; then
    echo "❌ 未找到 Node.js，请先安装 Node.js 18+"
    echo "下载地址: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js 版本: $(node -v)"

# 检查 npm
if ! command -v npm &> /dev/null; then
    echo "❌ 未找到 npm"
    exit 1
fi

echo "✅ npm 版本: $(npm -v)"
echo ""

# 安装依赖
echo "📦 安装依赖..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 依赖安装成功！"
    echo ""
    echo "📝 下一步："
    echo "1. 复制 .env.example 为 .env.local"
    echo "   cp .env.example .env.local"
    echo ""
    echo "2. 编辑 .env.local 文件，填写你的 API Keys"
    echo ""
    echo "3. 启动开发服务器"
    echo "   npm run dev"
    echo ""
    echo "🎉 开始使用 Chasoft 吧！"
else
    echo ""
    echo "❌ 依赖安装失败，请检查错误信息"
    exit 1
fi
