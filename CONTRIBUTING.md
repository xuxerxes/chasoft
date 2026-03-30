# 贡献指南

感谢你对 CHASoft 的兴趣！我们欢迎任何形式的贡献。

## 如何贡献

### 1. Fork 和克隆仓库

```bash
# 1. Fork 本仓库到你的 GitHub 账号
# 2. 克隆你的 fork
git clone https://github.com/你的用户名/chasoft.git
cd chasoft
```

### 2. 创建新分支

```bash
# 从 main 创建新分支
git checkout -b feature/你的功能
# 或者
git checkout -b fix/你的修复
```

### 3. 进行修改

编写代码时请遵循项目的代码规范（见下方）。

### 4. 提交更改

```bash
git add .
git commit -m "feat: 添加你的功能描述"
# 或者
git commit -m "fix: 修复你的问题描述"
```

提交信息格式：
- `feat:` - 新功能
- `fix:` - 修复 bug
- `docs:` - 文档更新
- `style:` - 代码格式调整（不影响功能）
- `refactor:` - 重构代码
- `test:` - 添加或修改测试
- `chore:` - 构建过程或辅助工具的变动

### 5. 推送到你的 fork

```bash
git push origin feature/你的功能
```

### 6. 创建 Pull Request

- 访问你的 fork 仓库
- 点击 "New Pull Request"
- 填写 PR 描述，说明你的改动
- 等待审核

## 代码规范

### TypeScript

- 使用 `strict` 模式
- 遵循 Airbnb TypeScript 规范
- 添加必要的类型注解
- 避免使用 `any`

### React

- 使用函数组件和 Hooks
- 遵循 React 最佳实践
- 组件命名使用 PascalCase
- 文件命名使用 kebab-case

### 样式

- 使用 Tailwind CSS
- 遵循项目现有的样式规范
- 保持设计一致性

### Git

- 提交信息使用英文
- 保持提交历史清晰
- 避免提交临时文件（如 `.env.local`）

## 开发环境设置

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建项目
npm run build

# 运行测试
npm test

# 代码检查
npm run lint
```

## 开发规范

1. **功能开发**
   - 先阅读相关文档
   - 理解现有代码结构
   - 编写单元测试
   - 更新相关文档

2. **Bug 修复**
   - 确认问题描述
   - 编写最小化复现步骤
   - 修复问题
   - 添加测试用例

3. **文档更新**
   - 更新 README
   - 更新 API 文档（如有）
   - 更新贡献指南

## 行为准则

请尊重所有贡献者。我们致力于创建一个友好、包容的社区。

## 许可证

通过贡献代码，你同意你的代码将在 MIT 许可证下发布。

## 问题反馈

如果你发现 bug 或有功能建议，请：
1. 搜索现有 Issues
2. 创建新 Issue，描述问题
3. 提供复现步骤
4. 附上截图（如有）

## 联系方式

- 提交 Issue
- 查看讨论区
