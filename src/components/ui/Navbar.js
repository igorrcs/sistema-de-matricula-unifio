'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/components/auth/AuthProvider'

export default function Navbar() {
  const pathname = usePathname()
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    // Redirecionar para a página inicial após logout
    window.location.href = '/'
  }

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold">
            Sistema de Matrícula
          </Link>
          
          <div className="flex space-x-4 items-center">
            <Link 
              href="/dashboard" 
              className={`px-3 py-2 rounded hover:bg-blue-700 ${
                pathname === '/dashboard' ? 'bg-blue-800' : ''
              }`}
            >
              Dashboard
            </Link>
            <Link 
              href="/documents" 
              className={`px-3 py-2 rounded hover:bg-blue-700 ${
                pathname === '/documents' ? 'bg-blue-800' : ''
              }`}
            >
              Documentos
            </Link>
            <Link 
              href="/status" 
              className={`px-3 py-2 rounded hover:bg-blue-700 ${
                pathname === '/status' ? 'bg-blue-800' : ''
              }`}
            >
              Status
            </Link>
            
            {user ? (
              <button 
                onClick={handleLogout}
                className="px-3 py-2 rounded hover:bg-blue-700"
              >
                Sair
              </button>
            ) : (
              <>
                <Link 
                  href="/login" 
                  className={`px-3 py-2 rounded hover:bg-blue-700 ${
                    pathname === '/login' ? 'bg-blue-800' : ''
                  }`}
                >
                  Entrar
                </Link>
                <Link 
                  href="/register" 
                  className={`px-3 py-2 rounded hover:bg-blue-700 ${
                    pathname === '/register' ? 'bg-blue-800' : ''
                  }`}
                >
                  Cadastro
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}