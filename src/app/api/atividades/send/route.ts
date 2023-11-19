

import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';
export const dynamic = "force-dynamic"
export async function POST(request: Request) {
  try {
    const idAluno = request.headers.get('idUser');

    if (!idAluno) {
      return NextResponse.json({ message: 'Usuário não encontrado.' }, { status: 401 });
    }

    try {
      const user = await prisma.usuario.findUnique({ where: { id: idAluno } });

      if (!user) {
        return NextResponse.json({ message: 'Usuário não encontrado.' }, { status: 404 });
      }

      if (user.papel !== 'ALUNO') {
        return NextResponse.json({ message: 'Usuário não Autorizado.' }, { status: 402 });
      }

      const { nota, delivery, idAtividade } = await request.json();

      const atividadeSelecionada = await prisma.atividadeAluno.findFirst({
        where: {
          atividadeId: idAtividade!,
          alunoId: idAluno!,
        },
      });

      if (!atividadeSelecionada) {
        return NextResponse.json({ message: 'Atividade não encontrada' }, { status: 404 });
      }
      const dataEntrega = delivery ? new Date(delivery) : new Date();
      const atividadeAtualizada = await prisma.atividadeAluno.update({
        where: {
          id: atividadeSelecionada.id,
        },
        data: {
          nota: parseInt(nota),
          dataEntrega: dataEntrega ,
        },
      });

      if (atividadeAtualizada) {
        return NextResponse.json({ message: 'Atividade enviada com sucesso!' }, { status: 200 });
      } else {
        return NextResponse.json({ message: 'Erro ao atualizar a atividade' }, { status: 400 });
      }
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Token inválido ou erro interno do servidor.' }, { status: 500 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Erro interno do servidor.' }, { status: 500 });
  }
}
