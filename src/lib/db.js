// Simulação de um banco de dados em memória
let users = [];
let documents = [];
let courses = [
  'Administração',
  'Engenharia de Software', 
  'Direito',
  'Medicina Veterinária',
  'Arquitetura',
  'Biologia',
  'Odontologia',
  'Agronomia',
  'Terapia Ocupacional',
  'Educação Física',
  'Engenharia Mecânica',
  'Engenharia Civil',
  'Psicologia',
  'Fisioterapia',
  'Nutrição',
  'Enfermagem'
];

let deadline = new Date();
deadline.setDate(deadline.getDate() + 30);

export const db = {
  users: {
    create: (userData) => {
      const user = {
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        ...userData
      };
      users.push(user);
      return user;
    },
    
    findMany: () => [...users],
    
    findById: (id) => users.find(user => user.id === id),
    
    findByEmail: (email) => users.find(user => user.email === email),
    
    update: (id, updates) => {
      const index = users.findIndex(user => user.id === id);
      if (index !== -1) {
        users[index] = { ...users[index], ...updates, updatedAt: new Date().toISOString() };
        return users[index];
      }
      return null;
    },
    
    delete: (id) => {
      const index = users.findIndex(user => user.id === id);
      if (index !== -1) {
        return users.splice(index, 1)[0];
      }
      return null;
    }
  },
  
  documents: {
    create: (docData) => {
      const document = {
        id: Date.now().toString(),
        uploadedAt: new Date().toISOString(),
        status: 'pending',
        ...docData
      };
      documents.push(document);
      return document;
    },
    
    findMany: (filters = {}) => {
      let filtered = [...documents];
      if (filters.userId) {
        filtered = filtered.filter(doc => doc.userId === filters.userId);
      }
      if (filters.status) {
        filtered = filtered.filter(doc => doc.status === filters.status);
      }
      return filtered;
    },
    
    findById: (id) => documents.find(doc => doc.id === id),
    
    update: (id, updates) => {
      const index = documents.findIndex(doc => doc.id === id);
      if (index !== -1) {
        documents[index] = { ...documents[index], ...updates };
        return documents[index];
      }
      return null;
    },
    
    delete: (id) => {
      const index = documents.findIndex(doc => doc.id === id);
      if (index !== -1) {
        return documents.splice(index, 1)[0];
      }
      return null;
    }
  },
  
  courses: {
    getAll: () => [...courses]
  },
  
  deadline: {
    get: () => deadline,
    set: (newDeadline) => {
      deadline = new Date(newDeadline);
      return deadline;
    }
  }
};

// Dados iniciais para teste
db.users.create({
  fullName: 'Administrador do Sistema',
  email: 'admin@escola.com',
  password: 'admin123',
  role: 'admin',
  cpf: '123.456.789-00',
  rg: '1234567',
  address: 'Endereço administrativo',
  birthDate: '1980-01-01',
  phone: '(11) 99999-9999'
});