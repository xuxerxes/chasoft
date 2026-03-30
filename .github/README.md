# GitHub 仓库配置说明

本目录包含 GitHub Actions 工作流和 Issue 模板配置。

## 1. 配置 GitHub Secrets

在 GitHub 仓库设置中添加以下 Secrets：

### Vercel 部署（可选）

- `VERCEL_TOKEN` - Vercel Personal Access Token
- `ORG_ID` - Vercel 组织 ID
- `PROJECT_ID` - Vercel 项目 ID

获取方式：
1. 访问 https://vercel.com/account/tokens
2. 创建 Personal Access Token
3. 访问 https://vercel.com/organizations/{org-id}/settings
4. 在 Settings -> General -> Project IDs 中找到项目 ID

### CI/CD 配置

当前配置的 CI 工作流包括：
- `ci.yml` - 代码检查、构建、测试
- `vercel-deploy.yml` - 自动部署到 Vercel（可选）

## 2. 启用 GitHub Features

### Issues
- ✅ 启用 Issues 功能
- ✅ 启用 Issue 模板

### Discussions（可选）
- ✅ 启用 Discussions 功能
- ✅ 配置 Discussions 模板

### Actions
- ✅ 启用 GitHub Actions

## 3. 添加仓库 Topics

在仓库设置中添加以下 Topics：
- `ai`
- `ui-builder`
- `nextjs`
- `react`
- `typescript`
- `tailwindcss`
- `monaco-editor`
- `react-flow`

## 4. 添加 README 链接

确保仓库根目录有 `README.md` 文件，并添加：
- 项目图标（可选）
- 项目描述
- Star 数量（可选）
- Fork 数量（可选）

## 5. 配置分支保护（推荐）

为 `main` 分支设置保护规则：
- ✅ 要求 Pull Request 之前进行代码检查
- ✅ 要求至少 1 位审查者
- ✅ 禁止直接推送到 main 分支

## 6. 设置仓库语言

在仓库设置中：
- ✅ 设置语言为 TypeScript
- ✅ 添加 License 模板（MIT）

## 7. 添加贡献者徽章（可选）

在 README 中添加：
```markdown
[![Contributors](https://img.shields.io/github/contributors/你的用户名/chasoft)](https://github.com/你的用户名/chasoft/graphs/contributors)
[![License](https://img.shields.io/github/license/你的用户名/chasoft)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/你的用户名/chasoft)](https://github.com/你的用户名/chasoft/stargazers)
```
