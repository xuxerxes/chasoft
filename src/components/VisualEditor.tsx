import { useState } from 'react'
import { ReactFlow, Node, Edge, Background } from 'react-flow-renderer'
import 'react-flow-renderer/dist/style.css'

const initialNodes: Node[] = [
  { id: '1', type: 'default', position: { x: 250, y: 100 }, data: { label: '登录页' } },
  { id: '2', type: 'default', position: { x: 100, y: 250 }, data: { label: '标题' } },
  { id: '3', type: 'default', position: { x: 400, y: 250 }, data: { label: '表单' } },
]

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
  { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
]

export function VisualEditor() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes)
  const [edges, setEdges] = useState<Edge[]>(initialEdges)

  return (
    <div className="h-full bg-gray-100">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={(nds) => setNodes(nds)}
        onEdgesChange={(eds) => setEdges(eds)}
      >
        <Background color="#cbd5e1" gap={16} />
      </ReactFlow>
    </div>
  )
}
