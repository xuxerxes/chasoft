# Chasoft - AI 可视化 UI 构建器

🎉 基于 AI 的可视化 UI 构建器，让你用自然语言创建、编辑和预览 React 组件

## ✨ 特性

- 🗣️ **对话生成**：用自然语言描述，AI 自动生成 React 代码
- 👁️ **实时预览**：代码修改即时生效，所见即所得
- ✋ **可视化编辑**：拖拽调整布局，可视化修改 UI
- 💻 **代码编辑器**：Monaco Editor，VS Code 同款体验
- 🔌 **多模型支持**：支持 Claude、GPT、Gemini、DeepSeek 等所有主流模型
- 🚀 **一键导出**：导出 React/HTML 代码，快速部署

## 🚀 快速开始

### 1. 安装依赖

```bash
cd chasoft
npm install
```

### 2. 配置环境变量

复制 `.env.example` 为 `.env.local` 并填写 API Key：

```bash
cp .env.example .env.local
```

```env
# OpenAI API Key
OPENAI_API_KEY=your_openai_api_key_here

# Anthropic API Key
ANTHROPIC_API_KEY=your_anthropic_api_key_here

# Google Gemini API Key
GEMINI_API_KEY=your_gemini_api_key_here

# DeepSeek API Key
DEEPSEEK_API_KEY=your_deepseek_api_key_here

# Ollama Base URL (for local models)
OLLAMA_BASE_URL=http://localhost:11434
```

### 3. 启动开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 开始使用！

## 📦 技术栈

- **框架**：Next.js 14 + React 18 + TypeScript
- **样式**：Tailwind CSS
- **代码编辑器**：Monaco Editor
- **可视化编辑**：React Flow
- **AI SDK**：Vercel AI SDK
- **数据库**：PostgreSQL (未来支持)

## 🤝 贡献

欢迎贡献代码、报告问题或提出新功能建议！

- 📖 查看 [CONTRIBUTING.md](./CONTRIBUTING.md) 了解贡献指南
- 🐛 报告问题请使用 [GitHub Issues](https://github.com/你的用户名/chasoft/issues)
- 💡 提出新功能请使用 [Feature Requests](https://github.com/你的用户名/chasoft/issues/new?labels=enhancement&template=feature_request.md)

## 📄 许可证

本项目采用 [MIT License](./LICENSE) 开源。

## 🌟 Star History

如果这个项目对你有帮助，请给个 Star ⭐

## 📮 联系方式

- 提交 Issue
- 查看 Discussions

## 🎯 使用示例

### 创建登录页面

```
用户：创建一个登录页面，左侧标题"欢迎回来"，右侧表单，包含用户名、密码、登录按钮
AI：好的，我来为您生成登录页面...

[自动生成 React 代码并实时预览]
```

### 调整布局

```
用户：把按钮移到中间，字体调大
AI：好的，已调整按钮位置和字体大小...

[自动更新代码并刷新预览]
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License
