import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export  async function GET(request: Request) {
  const idAluno = request.headers.get('idUser');
  if (!idAluno ) {
    return NextResponse.json({ message: 'Usuário não encontrado.' }, { status: 401 });
  }

  try {
    const atividades = await prisma.atividade.findMany({
      where: {
        atividadesAluno: { some: { aluno: { id: idAluno } } }
      },
      include: {
        atividadesAluno: true,
        disciplina: {
          select: {
            nome: true
          }
        }
      }
    });
    
    return NextResponse.json(atividades);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Erro ao obter as tarefas.' }, { status:500 });
  }
}
