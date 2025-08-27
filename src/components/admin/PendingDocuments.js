export default function PendingDocuments({ documents }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Documentos Pendentes</h2>
      
      {documents.length === 0 ? (
        <p className="text-gray-500 text-center py-4">Nenhum documento pendente.</p>
      ) : (
        <div className="space-y-4">
          {documents.map((doc) => (
            <div key={doc.id} className="border-b pb-4 last:border-b-0">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">{doc.userName}</p>
                  <p className="text-sm text-gray-600">{doc.document}</p>
                  <p className="text-xs text-gray-500">
                    Recebido: {new Date(doc.received).toLocaleString('pt-BR')}
                  </p>
                </div>
                
                <span className={`px-2 py-1 rounded text-xs ${
                  doc.priority === 'high' 
                    ? 'bg-red-100 text-red-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {doc.priority === 'high' ? 'Alta' : 'Média'}
                </span>
              </div>
              
              <div className="mt-2 flex space-x-2">
                <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                  Analisar
                </button>
                <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded text-sm hover:bg-gray-300">
                  Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}