export default function StatsGrid({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-sm font-medium text-gray-600">Aguardando Revisão</h3>
        <p className="text-3xl font-bold mt-2">{stats.pendingReview}</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-sm font-medium text-gray-600">Documentos Pendentes</h3>
        <p className="text-3xl font-bold mt-2">{stats.pendingDocuments}</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-sm font-medium text-gray-600">Aprovados</h3>
        <p className="text-3xl font-bold mt-2">{stats.approved}</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-sm font-medium text-gray-600">Recusados</h3>
        <p className="text-3xl font-bold mt-2">{stats.rejected}</p>
      </div>
    </div>
  )
}