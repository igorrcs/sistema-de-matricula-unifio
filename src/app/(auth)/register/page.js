'use client'
import { useState } from 'react'
import RegisterForm from '@/components/forms/RegisterForm'
import { useAuth } from '@/components/auth/AuthProvider'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const [isStudent, setIsStudent] = useState(true)
  const { login } = useAuth()
  const router = useRouter()

  const handleRegisterSuccess = (userData) => {
    // Fazer login automaticamente após o cadastro
    if (login(userData)) {
      // Redirecionar para o dashboard
      router.push('/dashboard')
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Cadastro de Usuário</h1>
      
      <div className="flex mb-6">
        <button
          className={`px-4 py-2 mr-2 ${isStudent ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setIsStudent(true)}
        >
          Aluno
        </button>
        <button
          className={`px-4 py-2 ${!isStudent ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setIsStudent(false)}
        >
          Responsável
        </button>
      </div>

      <RegisterForm isStudent={isStudent} onSuccess={handleRegisterSuccess} />
    </div>
  )
}