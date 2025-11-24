import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const deadline = db.deadline.get();
    return NextResponse.json({ deadline: deadline.toISOString() });
  } catch (error) {
    console.error('Erro ao buscar prazo:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const { deadline } = await request.json();

    if (!deadline) {
      return NextResponse.json(
        { error: 'Data é obrigatória' },
        { status: 400 }
      );
    }

    const newDeadline = db.deadline.set(deadline);
    return NextResponse.json({
      message: 'Prazo atualizado com sucesso',
      deadline: newDeadline.toISOString()
    });
  } catch (error) {
    console.error('Erro ao atualizar prazo:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}