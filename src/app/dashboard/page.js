'use client'
import { useAuth } from '@/components/auth/AuthProvider'

export default function DashboardPage() {
  const { user } = useAuth()

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Dashboard do Usuário</h1>
      
      {user ? (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Bem-vindo, {user.fullName}!</h2>
          <p className="text-gray-600">Esta é sua área pessoal onde você pode acompanhar o status da sua matrícula.</p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-800">Documentos</h3>
              <p className="text-2xl font-bold mt-2">5/8</p>
              <p className="text-sm text-blue-600">enviados</p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-medium text-yellow-800">Status</h3>
              <p className="text-xl font-bold mt-2">Em Análise</p>
              <p className="text-sm text-yellow-600">desde 20/10/2023</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium text-green-800">Próximos Passos</h3>
              <p className="text-sm mt-2 text-green-700">Aguardando aprovação dos documentos</p>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="font-semibold mb-3">Ações Rápidas</h3>
            <div className="flex space-x-4">
              <a href="/documents" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Enviar Documentos
              </a>
              <a href="/status" className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
                Ver Status Completo
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-3 text-yellow-800">Acesso Restrito</h2>
          <p className="mb-4">Você precisa fazer login para acessar o dashboard.</p>
          <a href="/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Fazer Cadastro
          </a>
        </div>
      )}
    </div>
  )
}