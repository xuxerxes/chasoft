export function ProjectFiles() {
  const files = [
    { name: 'LoginPage.jsx', icon: '📄', selected: true },
    { name: 'Dashboard.jsx', icon: '📄', selected: false },
    { name: 'Button.jsx', icon: '📄', selected: false },
    { name: 'index.css', icon: '🎨', selected: false },
  ]

  return (
    <div className="h-48 border-t border-gray-200 bg-white p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium text-gray-900">📁 项目文件</h3>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            + 新建
          </button>
          <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
            📥 导出
          </button>
        </div>
      </div>

      <div className="space-y-2">
        {files.map((file) => (
          <div
            key={file.name}
            className={`
              flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition
              ${file.selected
                ? 'bg-blue-50 border border-blue-200'
                : 'hover:bg-gray-50 border border-transparent'
              }
            `}
          >
            <span className={file.selected ? 'text-blue-500' : 'text-gray-500'}>
              {file.icon}
            </span>
            <span className={file.selected ? 'text-sm text-blue-900 font-medium' : 'text-sm text-gray-700'}>
              {file.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
