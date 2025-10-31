'use client'
import { useState, useEffect } from 'react'
import StatusTimeline from '@/components/user/StatusTimeline'
import { mockStatusData } from '@/data/mockData'

export default function StatusPage() {
  const [statusData, setStatusData] = useState(null)

  useEffect(() => {
    // Simular carregamento de dados
    setStatusData(mockStatusData)
  }, [])

  if (!statusData) {
    return <div className="text-center py-8">Carregando...</div>
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Acompanhamento de Status</h1>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-black">Status da Matrícula</h2>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            statusData.currentStatus === 'Aprovado' ? 'bg-green-100 text-green-800 ' :
            statusData.currentStatus === 'Recusado' ? 'bg-red-100 text-red-800' :
            statusData.currentStatus === 'Em Análise' ? 'bg-blue-100 text-blue-800' :
            statusData.currentStatus === 'Documentos Pendentes' ? 'bg-yellow-100 text-yellow-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {statusData.currentStatus}
          </span>
        </div>

        {statusData.pendingDocuments && statusData.pendingDocuments.length > 0 && (
          <div className="mb-6">
            <h3 className="font-medium mb-2 text-red-600">Documentos Pendentes:</h3>
            <ul className="list-disc list-inside space-y-1">
              {statusData.pendingDocuments.map((doc, index) => (
                <li key={index} className="text-sm">
                  {doc.document} - <span className="text-red-500">{doc.reason}</span>
                  {doc.resendLink && (
                    <a href={doc.resendLink} className="ml-2 text-blue-600 hover:underline">
                      Reenviar documento
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        <StatusTimeline events={statusData.history} />
      </div>

      <div className="bg-white rounded-lg shadow p-6 text-black">
        <h2 className="text-xl font-semibold mb-4 text-black">Documentos Enviados</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Documento</th>
                <th className="text-left py-2">Status</th>
                <th className="text-left py-2">Data de Envio</th>
                <th className="text-left py-2">Observações</th>
              </tr>
            </thead>
            <tbody>
              {statusData.documents.map((doc, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3">{doc.name}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded text-xs ${
                      doc.status === 'Aprovado' ? 'bg-green-100 text-green-800' :
                      doc.status === 'Recusado' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {doc.status}
                    </span>
                  </td>
                  <td className="py-3">
                    {new Date(doc.uploadDate).toLocaleDateString('pt-BR')}
                  </td>
                  <td className="py-3">{doc.notes || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}