import { createUser } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const userData = await request.json();

    // Validação básica
    const requiredFields = ['fullName', 'email', 'password', 'cpf', 'rg', 'address', 'birthDate', 'phone'];
    const missingFields = requiredFields.filter(field => !userData[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Campos obrigatórios: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    const result = await createUser(userData);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 400 }
      );
    }

    return NextResponse.json({
      message: 'Usuário criado com sucesso',
      user: result.user
    }, { status: 201 });
  } catch (error) {
    console.error('Erro no registro:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}