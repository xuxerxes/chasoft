import { useState } from 'react'
import { ModelConfig } from '@/lib/models'

const MODEL_CATEGORIES = {
  '🤖 Anthropic': ['claude-3-5-sonnet', 'claude-3-opus', 'claude-3-haiku'],
  '🦅 OpenAI': ['gpt-4o', 'gpt-4-turbo', 'gpt-3.5-turbo'],
  '🔮 Google': ['gemini-pro', 'gemini-ultra', 'gemini-flash'],
  '🧠 DeepSeek': ['deepseek-chat', 'deepseek-coder'],
  '🌙 Moonshot': ['moonshot-v1-8k', 'moonshot-v1-32k', 'moonshot-v1-128k'],
  '💻 本地模型': ['ollama-llama3', 'ollama-qwen2', 'ollama-mistral'],
}

const MODEL_DISPLAY_NAMES: Record<string, string> = {
  'claude-3-5-sonnet': 'Claude 3.5 Sonnet',
  'claude-3-opus': 'Claude 3 Opus',
  'claude-3-haiku': 'Claude 3 Haiku',
  'gpt-4o': 'GPT-4o',
  'gpt-4-turbo': 'GPT-4 Turbo',
  'gpt-3.5-turbo': 'GPT-3.5 Turbo',
  'gemini-pro': 'Gemini Pro',
  'gemini-ultra': 'Gemini Ultra',
  'gemini-flash': 'Gemini Flash',
  'deepseek-chat': 'DeepSeek Chat',
  'deepseek-coder': 'DeepSeek Coder',
  'moonshot-v1-8k': 'Moonshot V1 8K',
  'moonshot-v1-32k': 'Moonshot V1 32K',
  'moonshot-v1-128k': 'Moonshot V1 128K',
  'ollama-llama3': 'Ollama Llama3',
  'ollama-qwen2': 'Ollama Qwen2',
  'ollama-mistral': 'Ollama Mistral',
}

export function ModelSelector({ selected, onSelect }: {
  selected: string
  onSelect: (model: string) => void
}) {
  const [showDropdown, setShowDropdown] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredModels = Object.entries(MODEL_CATEGORIES)
    .flatMap(([category, models]) =>
      models.map(model => ({ category, id: model }))
    )
    .filter(m =>
      MODEL_DISPLAY_NAMES[m.id].toLowerCase().includes(searchQuery.toLowerCase())
    )

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition"
      >
        <span className="text-lg">🤖</span>
        <span className="font-medium text-gray-900">{MODEL_DISPLAY_NAMES[selected] || selected}</span>
        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {showDropdown && (
        <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-xl border border-gray-200 z-50 max-h-96 overflow-hidden">
          {/* 搜索框 */}
          <div className="p-3 border-b border-gray-100">
            <input
              type="text"
              placeholder="搜索模型..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
          </div>

          {/* 模型列表 */}
          <div className="max-h-80 overflow-y-auto">
            {Object.entries(MODEL_CATEGORIES).map(([category, models]) => (
              <div key={category}>
                <div className="px-3 py-2 bg-gray-50 text-xs font-medium text-gray-500">
                  {category}
                </div>
                <div className="divide-y divide-gray-100">
                  {models.map(model => (
                    <button
                      key={model}
                      onClick={() => {
                        onSelect(model)
                        setShowDropdown(false)
                      }}
                      className={`
                        w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition
                        ${selected === model ? 'bg-blue-50 border-l-4 border-blue-500' : ''}
                      `}
                    >
                      <div>
                        <div className="font-medium text-gray-900">{MODEL_DISPLAY_NAMES[model]}</div>
                        <div className="text-xs text-gray-500">
                          {category}
                        </div>
                      </div>
                      {selected === model && (
                        <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 添加模型按钮 */}
          <div className="p-3 border-t border-gray-100">
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              添加自定义模型
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
