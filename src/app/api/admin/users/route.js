import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const users = db.users.findMany();
    // Remover senhas dos usuários
    const usersWithoutPasswords = users.map(({ password, ...user }) => user);
    
    return NextResponse.json({ users: usersWithoutPasswords });
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}