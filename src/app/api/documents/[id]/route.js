import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const updates = await request.json();

    const document = db.documents.update(id, updates);

    if (!document) {
      return NextResponse.json(
        { error: 'Documento não encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: 'Documento atualizado com sucesso',
      document
    });
  } catch (error) {
    console.error('Erro ao atualizar documento:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    const document = db.documents.delete(id);

    if (!document) {
      return NextResponse.json(
        { error: 'Documento não encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: 'Documento deletado com sucesso'
    });
  } catch (error) {
    console.error('Erro ao deletar documento:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}