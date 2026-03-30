import { useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { ChatInterface } from '@/components/ChatInterface'
import { PreviewPane } from '@/components/PreviewPane'
import { VisualEditor } from '@/components/VisualEditor'
import { CodeEditor } from '@/components/CodeEditor'
import { ProjectFiles } from '@/components/ProjectFiles'
import { DEFAULT_MODEL } from '@/lib/models'
import { ModelConfig } from '@/lib/models'

export default function Home() {
  const [selectedModel, setSelectedModel] = useState(DEFAULT_MODEL)
  const [currentCode, setCurrentCode] = useState(`\`\`\`jsx
import React from 'react'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">👋</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">欢迎回来</h1>
          <p className="text-gray-600">登录您的账户继续</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              用户名
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="请输入用户名"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              密码
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="请输入密码"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition transform hover:scale-[1.02] active:scale-[0.98]"
          >
            登录
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            还没有账户？{' '}
            <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">
              立即注册
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
\`\`\``)

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="flex-1 flex overflow-hidden">
        {/* 左侧：聊天 + 项目文件 */}
        <div className="w-1/2 flex flex-col border-r border-gray-200">
          <ChatInterface />

          {/* 项目文件 */}
          <ProjectFiles />
        </div>

        {/* 右侧：预览 + 可视化编辑 + 代码编辑器 */}
        <div className="w-1/2 flex flex-col">
          <div className="flex-1 flex flex-col border-b border-gray-200">
            <div className="h-10 border-b border-gray-200 bg-white flex items-center gap-2 px-4">
              <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded-lg transition">
                👁️ 预览
              </button>
              <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition">
                ✋ 可视化
              </button>
              <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition">
                💻 代码
              </button>
            </div>

            {/* 预览标签页 */}
            <div className="flex-1 relative">
              <PreviewPane code={currentCode} />
            </div>
          </div>

          {/* 代码编辑器 */}
          <div className="h-1/2">
            <CodeEditor code={currentCode} />
          </div>
        </div>
      </div>
    </div>
  )
}
