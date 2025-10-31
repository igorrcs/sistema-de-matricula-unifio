'use client'
import { useAuth } from '@/components/auth/AuthProvider'

export default function AnalysisPage() {
  const { user } = useAuth()

  if (!user || user.role !== 'admin') {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-3 text-red-800">Acesso Negado</h2>
          <p className="mb-4">Você não tem permissão para acessar esta página.</p>
          <a href="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Voltar ao Dashboard
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Análise de Documentos</h1>
        <p className="text-gray-600">Área para análise e aprovação de documentos enviados pelos alunos.</p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Página em Desenvolvimento</h2>
          <p className="text-gray-500">
            Esta funcionalidade está sendo implementada. Em breve você poderá analisar documentos aqui.
          </p>
        </div>
      </div>
    </div>
  )
}