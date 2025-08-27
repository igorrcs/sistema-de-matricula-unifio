export default function StatusTimeline({ events }) {
  if (!events || events.length === 0) {
    return (
      <div className="text-center py-4 text-gray-500">
        Nenhum evento no histórico.
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Linha vertical da linha do tempo */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>

      <div className="space-y-6">
        {events.map((event, index) => (
          <div key={index} className="relative flex items-start">
            {/* Ponto na linha do tempo */}
            <div className="absolute left-3.5 mt-1.5 h-2 w-2 rounded-full bg-blue-500"></div>

            <div className="ml-10">
              <p className="text-sm text-gray-500">
                {new Date(event.date).toLocaleString('pt-BR')}
              </p>
              <p className="font-medium">{event.event}</p>
              <p className="text-sm text-gray-600">Status: {event.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}