import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';
export const dynamic = "force-dynamic"
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
    console.log(atividades)
    if(atividades.length <= 0) {
      return NextResponse.json({ message: 'error, atividades não encontradas.' }, { status:400})
    }
    return NextResponse.json(atividades);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Erro ao obter as tarefas.' }, { status:500 });
  }
}
