import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const status = searchParams.get('status');

    const filters = {};
    if (userId) filters.userId = userId;
    if (status) filters.status = status;

    const documents = db.documents.findMany(filters);
    return NextResponse.json({ documents });
  } catch (error) {
    console.error('Erro ao buscar documentos:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const documentData = await request.json();

    if (!documentData.userId || !documentData.type || !documentData.fileName) {
      return NextResponse.json(
        { error: 'Dados incompletos para criar documento' },
        { status: 400 }
      );
    }

    const document = db.documents.create(documentData);
    return NextResponse.json({
      message: 'Documento criado com sucesso',
      document
    }, { status: 201 });
  } catch (error) {
    console.error('Erro ao criar documento:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}