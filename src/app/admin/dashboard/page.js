'use client'
import { useState, useEffect } from 'react'
import AdminDashboard from '@/components/admin/AdminDashboard'
import { mockAdminData } from '@/data/mockData'

export default function AdminDashboardPage() {
  const [dashboardData, setDashboardData] = useState(null)
  const [timeRange, setTimeRange] = useState('week')

  useEffect(() => {
    // Simular carregamento de dados
    setDashboardData(mockAdminData)
  }, [timeRange])

  if (!dashboardData) {
    return <div className="text-center py-8">Carregando dashboard...</div>
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard do Atendente</h1>
        
        <select 
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="today">Hoje</option>
          <option value="week">Esta semana</option>
          <option value="month">Este mês</option>
        </select>
      </div>

      <AdminDashboard data={dashboardData} timeRange={timeRange} />
    </div>
  )
}