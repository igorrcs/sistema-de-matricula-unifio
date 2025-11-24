import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Simular upload de arquivo
    // Em um sistema real, aqui processaríamos o FormData
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Gerar URL fictícia para o arquivo
    const fileUrl = `/uploads/document-${Date.now()}.pdf`;

    return NextResponse.json({
      message: 'Upload realizado com sucesso',
      fileUrl,
      fileName: `document-${Date.now()}.pdf`
    });
  } catch (error) {
    console.error('Erro no upload:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}