import { db } from './db';

export const authenticateUser = async (email, password) => {
  const user = db.users.findByEmail(email);
  
  if (!user) {
    return { success: false, error: 'Usuário não encontrado' };
  }
  
  // Em um sistema real, usaríamos bcrypt para comparar senhas hash
  if (user.password !== password) {
    return { success: false, error: 'Senha incorreta' };
  }
  
  const { password: _, ...userWithoutPassword } = user;
  return { success: true, user: userWithoutPassword };
};

export const createUser = async (userData) => {
  const existingUser = db.users.findByEmail(userData.email);
  
  if (existingUser) {
    return { success: false, error: 'E-mail já cadastrado' };
  }
  
  const user = db.users.create(userData);
  const { password: _, ...userWithoutPassword } = user;
  
  return { success: true, user: userWithoutPassword };
};

export const getUserById = (id) => {
  const user = db.users.findById(id);
  if (user) {
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
  return null;
};