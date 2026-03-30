export interface ModelConfig {
  id: string
  name: string
  provider: string
  icon: string
  config: {
    model: string
    maxTokens: number
    baseUrl?: string
  }
}
