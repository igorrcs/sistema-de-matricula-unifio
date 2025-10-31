'use client'
import { useAuth } from '@/components/auth/AuthProvider'
import StatCard from '@/components/dashboard/StatCard'
import Button from '@/components/ui/Button'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import { useState, useEffect } from 'react'

export default function DashboardPage() {
  const { user } = useAuth()
  const [daysRemaining, setDaysRemaining] = useState(null)
  const [deadlineDate, setDeadlineDate] = useState(null)

  useEffect(() => {
    // Calcular data limite (30 dias a partir de hoje)
    const today = new Date()
    const deadline = new Date()
    deadline.setDate(today.getDate() + 30)
    
    setDeadlineDate(deadline)
    
    // Calcular dias restantes
    const timeDiff = deadline.getTime() - today.getTime()
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))
    setDaysRemaining(daysDiff)
  }, [])

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-3 text-yellow-800">Acesso Restrito</h2>
          <p className="mb-4">Você precisa fazer login para acessar o dashboard.</p>
          <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Fazer Login
          </a>
        </div>
      </div>
    )
  }

  // Dados mockados para o dashboard
  const stats = [
    { 
      title: 'Documentos Enviados', 
      value: '5/8', 
      description: 'Total de documentos', 
      icon: '📄', 
      trend: 'up' 
    },
    { 
      title: 'Status da Matrícula', 
      value: 'Em Análise', 
      description: 'Desde 20/10/2023', 
      icon: '📋', 
      trend: 'neutral' 
    },
    { 
      title: 'Prazo para Envio', 
      value: daysRemaining !== null ? `${daysRemaining} dias` : 'Calculando...', 
      description: deadlineDate ? `Até ${deadlineDate.toLocaleDateString('pt-BR')}` : '', 
      icon: '⏰', 
      trend: daysRemaining !== null && daysRemaining <= 7 ? 'down' : 'neutral' 
    },
  ]

  const recentActivities = [
    { id: 1, action: 'Documento de Identidade enviado', date: '2023-10-20T14:30:00', status: 'completed' },
    { id: 2, action: 'CPF enviado para análise', date: '2023-10-20T14:25:00', status: 'completed' },
    { id: 3, action: 'Comprovante de Residência recusado', date: '2023-10-20T14:20:00', status: 'error' },
  ]

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Bem-vindo de volta, {user.fullName}! Aqui está o resumo do seu processo de matrícula.</p>
        
        {/* Alerta de data limite */}
        {daysRemaining !== null && daysRemaining <= 10 && (
          <div className={`mt-4 p-4 rounded-lg border ${
            daysRemaining <= 3 
              ? 'bg-red-50 border-red-200' 
              : daysRemaining <= 7 
              ? 'bg-orange-50 border-orange-200' 
              : 'bg-yellow-50 border-yellow-200'
          }`}>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {daysRemaining <= 3 ? (
                  <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                ) : daysRemaining <= 7 ? (
                  <svg className="h-5 w-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <div className="ml-3">
                <h3 className={`text-sm font-medium ${
                  daysRemaining <= 3 
                    ? 'text-red-800' 
                    : daysRemaining <= 7 
                    ? 'text-orange-800' 
                    : 'text-yellow-800'
                }`}>
                  {daysRemaining <= 3 
                    ? 'Prazo Crítico!' 
                    : daysRemaining <= 7 
                    ? 'Prazo se aproximando!' 
                    : 'Atenção ao prazo'}
                </h3>
                <div className={`mt-1 text-sm ${
                  daysRemaining <= 3 
                    ? 'text-red-700' 
                    : daysRemaining <= 7 
                    ? 'text-orange-700' 
                    : 'text-yellow-700'
                }`}>
                  <p>
                    {daysRemaining === 1 
                      ? 'Resta apenas 1 dia' 
                      : `Restam ${daysRemaining} dias`
                    } para o envio de todos os documentos. 
                    {daysRemaining <= 3 && ' Não deixe para a última hora!'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ações Rápidas */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Ações Rápidas</h2>
          <div className="space-y-3">
            <a href="/documents" className="block w-full">
              <Button variant="primary" className="w-full justify-center">
                Enviar Documentos
              </Button>
            </a>
            <a href="/status" className="block w-full">
              <Button variant="secondary" className="w-full justify-center">
                Ver Status Completo
              </Button>
            </a>
          </div>
          
          {/* Informações sobre prazos */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Informações sobre prazos</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li className="flex items-start">
                <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Documentos aprovados: Sem prazo adicional</span>
              </li>
              <li className="flex items-start">
                <svg className="h-4 w-4 text-yellow-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Documentos pendentes: {daysRemaining !== null ? `${daysRemaining} dias restantes` : 'Prazo em cálculo'}</span>
              </li>
              <li className="flex items-start">
                <svg className="h-4 w-4 text-red-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>Documentos recusados: 7 dias para reenvio</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Atividades Recentes */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4 text-black">Atividades Recentes</h2>
          <div className="space-y-4">
            {recentActivities.map(activity => (
              <div key={activity.id} className="flex items-start">
                <div className={`flex-shrink-0 mt-1 ${
                  activity.status === 'completed' ? 'text-green-500' : 
                  activity.status === 'error' ? 'text-red-500' : 'text-blue-500'
                }`}>
                  {activity.status === 'completed' ? (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ) : activity.status === 'error' ? (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(activity.date).toLocaleString('pt-BR')}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Lembrete de prazo */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">Prazo Final</h3>
                <div className="mt-1 text-sm text-blue-700">
                  <p>
                    Todos os documentos devem ser enviados até{' '}
                    <strong>
                      {deadlineDate ? deadlineDate.toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric'
                      }) : 'carregando...'}
                    </strong>
                    {' '}para garantir sua vaga.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}