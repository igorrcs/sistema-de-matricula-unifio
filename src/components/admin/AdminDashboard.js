import StatsGrid from './StatsGrid'
import PendingDocuments from './PendingDocuments.js'
import RecentActivity from './RecentActivity'

export default function AdminDashboard({ data, timeRange }) {
  return (
    <div className="space-y-6">
      <StatsGrid stats={data.stats} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PendingDocuments documents={data.pendingDocuments} />
        <RecentActivity activities={data.recentActivities} />
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Indicadores de Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded">
            <h3 className="font-medium text-gray-600">Tempo Médio de Análise</h3>
            <p className="text-2xl font-bold">{data.performanceMetrics.averageTime}</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="font-medium text-gray-600">Taxa de Retrabalho</h3>
            <p className="text-2xl font-bold">{data.performanceMetrics.reworkRate}%</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="font-medium text-gray-600">Solicitações Finalizadas</h3>
            <p className="text-2xl font-bold">{data.performanceMetrics.completedRequests}</p>
          </div>
        </div>
      </div>
    </div>
  )
}