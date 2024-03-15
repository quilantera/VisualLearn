import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = "force-dynamic"
export async function GET(request: Request) {
  const idUser = request.headers.get('idUser');
  try {

    if (!idUser) {
      return NextResponse.json({ message: 'id do usuário não encontrado.' }, { status: 400 });
    }
    const user = await prisma.usuario.findUnique({where: { id: idUser }});
    if(!user) {
      return NextResponse.json({message: 'Usuário não encontrado.'}, { status: 400 });
    }
    if(user.papel === "PROFESSOR"){
const tarefas = await prisma.atividade.findMany({
    where: {
      disciplina: {
        professorId: user.id,
      },
    },
    include: {
      disciplina: {
        select: {
          nome: true,
          urlImagem:true,
          turmas: {
            select: {
              nome: true,
              
            },
          },
        },
      },
      atividadesAluno: true
    }
  });
  if (!tarefas|| tarefas.length === 0) {
    return NextResponse.json({ message: 'tarefas não encontradas.' }, { status: 404 });
  }
  const resultado  = tarefas.map((tarefa) => {
 
    const alunosResponderam = tarefa.atividadesAluno.reduce(
      (total, atividade) => atividade.dataEntrega !== null ? total + 1 : total,
      0
    );
      const alunosDisponiveis = tarefa.atividadesAluno.length;    

      return {
          id: tarefa.id,
          nomeDisciplina: tarefa.disciplina.nome,
          nomeTurma: tarefa.disciplina.turmas[0].nome,
          totalAlunosDisponiveis: alunosDisponiveis, // Ajuste conforme necessário
          alunosResponderam: alunosResponderam,
          nome: tarefa.nome,
          prazo: tarefa.prazo,
          cor: tarefa.cor,
          urlImagem: tarefa.disciplina.urlImagem,
      };
    });

  return NextResponse.json(resultado);
}
return NextResponse.json({ message: 'Usuário não autorizado.' }, { status: 401 });
} catch (error) {
  console.error(error);
  return NextResponse.json({ message: 'Erro ao obter as matérias.' }, { status: 500 });
}
}
