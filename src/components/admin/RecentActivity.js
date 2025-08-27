export default function RecentActivity({ activities }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Atividade Recente</h2>
      
      {activities.length === 0 ? (
        <p className="text-gray-500 text-center py-4">Nenhuma atividade recente.</p>
      ) : (
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="border-b pb-4 last:border-b-0">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">{activity.userName}</p>
                  <p className="text-sm text-gray-600">{activity.action}</p>
                </div>
                
                <span className="text-xs text-gray-500">
                  {new Date(activity.time).toLocaleString('pt-BR')}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}