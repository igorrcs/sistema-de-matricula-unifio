import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold mb-6">Sistema de Matrícula</h1>
      <p className="text-xl mb-8">Bem-vindo ao sistema de gerenciamento de matrículas</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <Link 
          href="/register" 
          className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Fazer Cadastro
        </Link>
        
        <Link 
          href="/documents" 
          className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors"
        >
          Enviar Documentos
        </Link>
        
        <Link 
          href="/status" 
          className="bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Verificar Status
        </Link>
        
        <Link 
          href="/admin/dashboard" 
          className="bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors"
        >
          Área do Administrador
        </Link>
      </div>
    </div>
  )
}