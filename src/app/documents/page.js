'use client'
import { useState } from 'react'
import DocumentUpload from '@/components/user/DocumentUpload'
import { requiredDocuments } from '@/data/mockData'

export default function DocumentsPage() {
  const [uploadHistory, setUploadHistory] = useState([])

  const handleUpload = (document) => {
    const newUpload = {
      id: Date.now(),
      documentType: document.type,
      fileName: document.file.name,
      status: 'pending',
      uploadedAt: new Date().toISOString()
    }
    
    setUploadHistory(prev => [newUpload, ...prev])
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Envio de Documentos</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Documentos Necessários</h2>
        <ul className="list-disc list-inside space-y-2">
          {requiredDocuments.map(doc => (
            <li key={doc.id}>
              <span className="font-medium">{doc.name}</span>
              {doc.description && <span className="text-gray-600"> - {doc.description}</span>}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid gap-6">
        {requiredDocuments.map(doc => (
          <DocumentUpload
            key={doc.id}
            document={doc}
            onUpload={handleUpload}
          />
        ))}
      </div>

      {uploadHistory.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Histórico de Envios</h2>
          <div className="space-y-2">
            {uploadHistory.map(item => (
              <div key={item.id} className="p-3 border rounded flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.documentType}</p>
                  <p className="text-sm text-gray-600">{item.fileName}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(item.uploadedAt).toLocaleString('pt-BR')}
                  </p>
                </div>
                <span className={`px-2 py-1 rounded text-xs ${
                  item.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  item.status === 'approved' ? 'bg-green-100 text-green-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {item.status === 'pending' ? 'Pendente' : 
                   item.status === 'approved' ? 'Aprovado' : 'Recusado'}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}