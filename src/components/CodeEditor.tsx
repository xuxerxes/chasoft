import Editor from '@monaco-editor/react'
import { useState } from 'react'

export function CodeEditor({ code }: { code: string }) {
  const [currentCode, setCurrentCode] = useState(code)

  return (
    <div className="h-full bg-gray-900">
      <Editor
        height="100%"
        language="javascript"
        value={currentCode}
        onChange={(value) => setCurrentCode(value || '')}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  )
}
