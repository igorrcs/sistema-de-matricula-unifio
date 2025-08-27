export const requiredDocuments = [
  { id: 1, name: 'Documento de Identidade', description: 'Frente e verso' },
  { id: 2, name: 'CPF', description: '' },
  { id: 3, name: 'Comprovante de Residência', description: 'Últimos 3 meses' },
  { id: 4, name: 'Histórico Escolar', description: '' },
  { id: 5, name: 'Certificado de Reservista', description: 'Obrigatório para homens entre 18-45 anos' },
  { id: 6, name: 'Título de Eleitor', description: 'Obrigatório para maiores de 18 anos' }
]

export const mockStatusData = {
  currentStatus: 'Documentos Pendentes',
  pendingDocuments: [
    {
      document: 'Comprovante de Residência',
      reason: 'Documento ilegível',
      resendLink: '/documents'
    }
  ],
  history: [
    {
      date: '2023-10-20T14:30:00',
      event: 'Documentos enviados para análise',
      status: 'Em Análise'
    },
    {
      date: '2023-10-19T10:15:00',
      event: 'Cadastro realizado',
      status: 'Aguardando Envio'
    }
  ],
  documents: [
    {
      name: 'Documento de Identidade',
      status: 'Aprovado',
      uploadDate: '2023-10-20',
      notes: ''
    },
    {
      name: 'CPF',
      status: 'Aprovado',
      uploadDate: '2023-10-20',
      notes: ''
    },
    {
      name: 'Comprovante de Residência',
      status: 'Recusado',
      uploadDate: '2023-10-20',
      notes: 'Documento ilegível'
    }
  ]
}

export const mockAdminData = {
  stats: {
    pendingReview: 12,
    pendingDocuments: 8,
    approved: 25,
    rejected: 3
  },
  pendingDocuments: [
    {
      id: 1,
      userName: 'João Silva',
      document: 'Comprovante de Residência',
      received: '2023-10-20T14:30:00',
      priority: 'high'
    },
    {
      id: 2,
      userName: 'Maria Santos',
      document: 'Histórico Escolar',
      received: '2023-10-20T13:15:00',
      priority: 'medium'
    }
  ],
  recentActivities: [
    {
      id: 1,
      userName: 'Carlos Oliveira',
      action: 'Documentos aprovados',
      time: '2023-10-20T15:45:00'
    },
    {
      id: 2,
      userName: 'Ana Costa',
      action: 'Solicitação de reenvio',
      time: '2023-10-20T14:20:00'
    }
  ],
  performanceMetrics: {
    averageTime: '2h 30min',
    reworkRate: 15,
    completedRequests: 42
  }
}