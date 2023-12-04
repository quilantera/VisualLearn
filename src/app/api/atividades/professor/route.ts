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
                    nome:true,
                    turmas: {
                    select: {
                      id: true,
                      alunos: {
                        select:{
                            id: true,
                      },
                    },
                    },
                  },
                },
              },
              atividadesAluno: {
                where: {
                  dataEntrega: {
                    not: null,
                  },
                },
              },
            },
          });
    if (!tarefas|| tarefas.length === 0) {
      return NextResponse.json({ message: 'tarefas não encontradas.' }, { status: 404 });
    }
    const resultado  = tarefas.map((tarefa) => {
        const alunosDisponiveis = tarefa.disciplina.turmas.reduce(
          (total, turma) => total + turma.alunos.length,
          0
        );
  
        const alunosResponderam = tarefa.atividadesAluno.length;    
  
        return {
            id: tarefa.id,
            nomeDisciplina: tarefa.disciplina.nome,
            totalAlunosDisponiveis: alunosDisponiveis, // Ajuste conforme necessário
            alunosResponderam,
            nome: tarefa.nome,
            prazo: tarefa.prazo,
            cor: tarefa.cor,
            urlImagem: tarefa.urlImagem,
            disciplinaId: tarefa.disciplinaId,
        };
      });
  
    console.log(resultado);
    return NextResponse.json(resultado);
  }
  return NextResponse.json({ message: 'Usuário não autorizado.' }, { status: 401 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Erro ao obter as matérias.' }, { status: 500 });
  }
}
