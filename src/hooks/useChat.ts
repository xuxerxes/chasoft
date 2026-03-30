import { useState, useCallback } from 'react'
import { generateText } from 'ai'
import { openai } from '@ai-sdk/openai'
import { anthropic } from '@ai-sdk/anthropic'
import { google } from '@ai-sdk/google'

const SYSTEM_PROMPT = `
你是一个专业的 React + Tailwind CSS 开发者。

规则：
1. 使用 Tailwind CSS 实现美观的样式
2. 代码简洁、可读、可维护
3. 支持响应式设计
4. 包含必要的注释
5. 生成完整可运行的代码

输出格式：
只返回代码，不要解释。

示例输入：
"创建一个登录页面，左侧标题'欢迎回来'，右侧表单，包含用户名、密码、登录按钮"

示例输出：
\`\`\`jsx
export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* 左侧标题区 */}
      <div className="w-1/2 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">欢迎回来</h1>
          <p className="text-lg opacity-90">登录您的账户继续</p>
        </div>
      </div>
      
      {/* 右侧表单区 */}
      <div className="w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6">登录</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">用户名</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="请输入用户名"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">密码</label>
              <input 
                type="password" 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="请输入密码"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              登录
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
\`\`\`
`

export function useChat() {
  const [isGenerating, setIsGenerating] = useState(false)

  const sendMessage = useCallback(async (userMessage: string) => {
    setIsGenerating(true)

    try {
      // 根据选择的模型选择 AI 提供商
      const model = process.env.NEXT_PUBLIC_AI_MODEL || 'claude-3-5-sonnet'

      let result
      if (model.startsWith('claude')) {
        result = await generateText({
          model: anthropic(model),
          prompt: `${SYSTEM_PROMPT}\n\n用户需求：${userMessage}`,
        })
      } else if (model.startsWith('gpt')) {
        result = await generateText({
          model: openai(model),
          prompt: `${SYSTEM_PROMPT}\n\n用户需求：${userMessage}`,
        })
      } else if (model.startsWith('gemini')) {
        result = await generateText({
          model: google(model),
          prompt: `${SYSTEM_PROMPT}\n\n用户需求：${userMessage}`,
        })
      } else {
        throw new Error(`不支持的模型：${model}`)
      }

      const aiResponse = result.text.trim()
      return { role: 'assistant' as const, content: aiResponse }
    } catch (error) {
      console.error('AI 生成失败:', error)
      return {
        role: 'assistant' as const,
        content: '抱歉，生成代码时遇到错误，请稍后再试。'
      }
    } finally {
      setIsGenerating(false)
    }
  }, [])

  return {
    sendMessage,
    isGenerating,
  }
}
