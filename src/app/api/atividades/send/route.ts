import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export const dynamic = "force-dynamic";

export async function POST(request: Request) {

  const idAluno = request.headers.get('idUser');
  try {

    if (!idAluno) {
      return NextResponse.json({ message: 'Usuário não encontrado.' }, { status: 401 });
    }

      const user = await prisma.usuario.findUnique({ where: { id: idAluno } });

      if (!user) {
        return NextResponse.json({ message: 'Usuário não encontrado.' }, { status: 404 });
      }

      if (user.papel !== 'ALUNO') {
        return NextResponse.json({ message: 'Usuário não Autorizado.' }, { status: 403 });
      }

      const { nota, delivery, idAtividade } = await request.json();
      if (idAtividade === undefined || nota === undefined || delivery === undefined) {
        return NextResponse.json({ message: 'Parâmetros inválidos.' }, { status: 400 });
      }

      // Validate nota and delivery here if needed

      const atividadeSelecionada = await prisma.atividadeAluno.findFirst({
        where: {
          atividadeId: idAtividade,
          alunoId: idAluno,
        },
      });

      if (!atividadeSelecionada) {
        return NextResponse.json({ message: 'Atividade não encontrada.' }, { status: 404 });
      }
      const dataEntrega = delivery ? new Date(delivery) : new Date();
      const atividadeAtualizada = await prisma.atividadeAluno.update({
        where: {
          id: atividadeSelecionada.id,
        },
        data: {
          nota: parseInt(nota),
          dataEntrega: dataEntrega,
        },
      });

      if (atividadeAtualizada) {
        return NextResponse.json({ message: 'Atividade enviada com sucesso!' }, { status: 200 });
      } else {
        return NextResponse.json({ message: 'Erro ao atualizar a atividade.' }, { status: 500 });
      }
  
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Erro interno do servidor.' }, { status: 500 });
  }
}
