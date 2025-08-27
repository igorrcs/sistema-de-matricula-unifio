'use client'
import { useState } from 'react'
import { validateCPF, validateEmail, validatePassword } from '@/lib/validation'

export default function RegisterForm({ isStudent, onSuccess }) {
  const [formData, setFormData] = useState({
    fullName: '',
    socialName: '',
    address: '',
    cpf: '',
    rg: '',
    voterTitle: '',
    reserveCertificate: '',
    email: '',
    birthDate: '',
    gender: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Nome completo é obrigatório'
    if (!formData.address.trim()) newErrors.address = 'Endereço é obrigatório'
    if (!validateCPF(formData.cpf)) newErrors.cpf = 'CPF inválido'
    if (!formData.rg.trim()) newErrors.rg = 'RG é obrigatório'
    if (!validateEmail(formData.email)) newErrors.email = 'E-mail inválido'
    if (!formData.birthDate) newErrors.birthDate = 'Data de nascimento é obrigatória'
    if (!formData.phone.trim()) newErrors.phone = 'Celular é obrigatório'
    if (!validatePassword(formData.password)) newErrors.password = 'Senha deve ter pelo menos 6 caracteres'
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Senhas não coincidem'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      // Aqui você faria a chamada para a API
      console.log('Dados do formulário:', formData)
      alert('Cadastro realizado com sucesso!')
    }
  }
 const userData = {
        id: Date.now(),
        ...formData,
        role: isStudent ? 'student' : 'guardian'
      }
      if (onSuccess) {
        onSuccess(userData)
      }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1">Nome completo *</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
      </div>

      <div>
        <label className="block mb-1">Nome social</label>
        <input
          type="text"
          name="socialName"
          value={formData.socialName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1">Endereço completo *</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1">CPF *</label>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          {errors.cpf && <p className="text-red-500 text-sm">{errors.cpf}</p>}
        </div>

        <div>
          <label className="block mb-1">RG *</label>
          <input
            type="text"
            name="rg"
            value={formData.rg}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          {errors.rg && <p className="text-red-500 text-sm">{errors.rg}</p>}
        </div>
      </div>

      {isStudent && (
        <>
          <div>
            <label className="block mb-1">Título de Eleitor</label>
            <input
              type="text"
              name="voterTitle"
              value={formData.voterTitle}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-1">Certificado de Reservista</label>
            <input
              type="text"
              name="reserveCertificate"
              value={formData.reserveCertificate}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </>
      )}

      <div>
        <label className="block mb-1">E-mail *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1">Data de nascimento *</label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          {errors.birthDate && <p className="text-red-500 text-sm">{errors.birthDate}</p>}
        </div>

        <div>
          <label className="block mb-1">Gênero</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Selecione</option>
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
            <option value="other">Outro</option>
            <option value="prefer_not_say">Prefiro não informar</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block mb-1">Celular *</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1">Senha *</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        <div>
          <label className="block mb-1">Confirmar senha *</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
        </div>
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Cadastrar
      </button>
    </form>
  )
}