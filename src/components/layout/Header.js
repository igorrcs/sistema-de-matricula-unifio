'use client'

import Link from 'next/link'
import { useAuth } from '@/components/auth/AuthProvider'
import Button from '@/components/ui/Button'

const Header = () => {
  const { user, logout } = useAuth()

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <div className="flex items-center">
                <div className="bg-blue-600 text-white p-2 rounded-lg">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l-9 5m9-5v6" />
                  </svg>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">Sistema de Matrícula</span>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-4">
            {user ? (
              <>
                <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </Link>
                <Link href="/documents" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Documentos
                </Link>
                <Link href="/status" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Status
                </Link>
              </>
            ) : (
              <>
                <Link href="/login" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Entrar
                </Link>
                <Link href="/register" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Cadastro
                </Link>
              </>
            )}
          </nav>

          <div className="flex items-center">
            {user ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-700">Olá, {user.fullName}</span>
                <Button variant="secondary" size="small" onClick={logout}>
                  Sair
                </Button>
              </div>
            ) : (
              <div className="flex space-x-2">
                <Link href="/login">
                  <Button variant="secondary" size="small">
                    Entrar
                  </Button>
                </Link>
                <Link href="/register">
                  <Button variant="primary" size="small">
                    Cadastrar
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header