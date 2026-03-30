import { useState, useRef, useEffect } from 'react'

export function PreviewPane({ code }: { code: string }) {
  const [currentCode, setCurrentCode] = useState(code)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (iframeRef.current) {
      const iframe = iframeRef.current.contentWindow
      if (iframe) {
        iframe.document.open()
        iframe.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <script src="https://cdn.tailwindcss.com"></script>
              <style>
                body { margin: 0; padding: 20px; font-family: system-ui, sans-serif; }
                * { box-sizing: border-box; }
              </style>
            </head>
            <body>
              ${currentCode}
            </body>
          </html>
        `)
        iframe.document.close()
      }
    }
  }, [currentCode])

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      {/* 工具栏 */}
      <div className="h-12 border-b border-gray-200 bg-white flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg" title="刷新">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg" title="全屏">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">实时预览</span>
        </div>
      </div>

      {/* 预览窗口 */}
      <div className="flex-1 overflow-hidden">
        <iframe
          ref={iframeRef}
          className="w-full h-full border-0"
          title="Preview"
        />
      </div>
    </div>
  )
}
