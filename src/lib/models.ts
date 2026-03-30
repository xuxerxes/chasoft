import { ModelConfig } from './models'

export const MODELS: ModelConfig[] = [
  {
    id: 'claude-3-5-sonnet',
    name: 'Claude 3.5 Sonnet',
    provider: 'anthropic',
    icon: '🤖',
    config: {
      model: 'claude-3-5-sonnet-20241022',
      maxTokens: 4096,
    },
  },
  {
    id: 'claude-3-opus',
    name: 'Claude 3 Opus',
    provider: 'anthropic',
    icon: '🤖',
    config: {
      model: 'claude-3-opus-20240229',
      maxTokens: 4096,
    },
  },
  {
    id: 'claude-3-haiku',
    name: 'Claude 3 Haiku',
    provider: 'anthropic',
    icon: '🤖',
    config: {
      model: 'claude-3-haiku-20240307',
      maxTokens: 4096,
    },
  },
  {
    id: 'gpt-4o',
    name: 'GPT-4o',
    provider: 'openai',
    icon: '🦅',
    config: {
      model: 'gpt-4o',
      maxTokens: 4096,
    },
  },
  {
    id: 'gpt-4-turbo',
    name: 'GPT-4 Turbo',
    provider: 'openai',
    icon: '🦅',
    config: {
      model: 'gpt-4-turbo',
      maxTokens: 4096,
    },
  },
  {
    id: 'gpt-3.5-turbo',
    name: 'GPT-3.5 Turbo',
    provider: 'openai',
    icon: '🦅',
    config: {
      model: 'gpt-3.5-turbo',
      maxTokens: 4096,
    },
  },
  {
    id: 'gemini-pro',
    name: 'Gemini Pro',
    provider: 'google',
    icon: '🔮',
    config: {
      model: 'gemini-pro',
      maxTokens: 4096,
    },
  },
  {
    id: 'gemini-ultra',
    name: 'Gemini Ultra',
    provider: 'google',
    icon: '🔮',
    config: {
      model: 'gemini-ultra',
      maxTokens: 4096,
    },
  },
  {
    id: 'deepseek-chat',
    name: 'DeepSeek Chat',
    provider: 'deepseek',
    icon: '🧠',
    config: {
      model: 'deepseek-chat',
      maxTokens: 4096,
    },
  },
  {
    id: 'deepseek-coder',
    name: 'DeepSeek Coder',
    provider: 'deepseek',
    icon: '🧠',
    config: {
      model: 'deepseek-coder',
      maxTokens: 4096,
    },
  },
  {
    id: 'moonshot-v1-8k',
    name: 'Moonshot V1 8K',
    provider: 'moonshot',
    icon: '🌙',
    config: {
      model: 'moonshot-v1-8k',
      maxTokens: 8192,
    },
  },
  {
    id: 'moonshot-v1-32k',
    name: 'Moonshot V1 32K',
    provider: 'moonshot',
    icon: '🌙',
    config: {
      model: 'moonshot-v1-32k',
      maxTokens: 32768,
    },
  },
  {
    id: 'ollama-llama3',
    name: 'Ollama Llama3',
    provider: 'ollama',
    icon: '💻',
    config: {
      baseUrl: process.env.OLLAMA_BASE_URL || 'http://localhost:11434',
      model: 'llama3',
      maxTokens: 4096,
    },
  },
  {
    id: 'ollama-qwen2',
    name: 'Ollama Qwen2',
    provider: 'ollama',
    icon: '💻',
    config: {
      baseUrl: process.env.OLLAMA_BASE_URL || 'http://localhost:11434',
      model: 'qwen2',
      maxTokens: 4096,
    },
  },
  {
    id: 'ollama-mistral',
    name: 'Ollama Mistral',
    provider: 'ollama',
    icon: '💻',
    config: {
      baseUrl: process.env.OLLAMA_BASE_URL || 'http://localhost:11434',
      model: 'mistral',
      maxTokens: 4096,
    },
  },
]

export const DEFAULT_MODEL = MODELS[0].id

export const MODEL_CATEGORIES = {
  '🤖 Anthropic': MODELS.filter(m => m.provider === 'anthropic').map(m => m.id),
  '🦅 OpenAI': MODELS.filter(m => m.provider === 'openai').map(m => m.id),
  '🔮 Google': MODELS.filter(m => m.provider === 'google').map(m => m.id),
  '🧠 DeepSeek': MODELS.filter(m => m.provider === 'deepseek').map(m => m.id),
  '🌙 Moonshot': MODELS.filter(m => m.provider === 'moonshot').map(m => m.id),
  '💻 本地模型': MODELS.filter(m => m.provider === 'ollama').map(m => m.id),
}
