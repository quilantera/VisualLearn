import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { Context } from 'vm';
export const dynamic = "force-dynamic"
export async function GET(request: Request, context: Context) {
  const idUser = request.headers.get('idUser');
  try {
    const idTarefa = context.params.id;
    if (!idUser) {
      return NextResponse.json({ message: 'E-mail do usuário não fornecido.' }, { status: 400 });
    }
    const user = await prisma.usuario.findUnique({where: { id: idUser }});
    if(!user) {
      return NextResponse.json({message: 'Usuário não encontrado.'}, { status: 400 });
    }
    if(user.papel === "PROFESSOR"){
    const tarefa = await prisma.atividade.findUnique({
      where: { id: idTarefa },
      include: {
        atividadesAluno:{
            include:{
                aluno: {
                  select: {
                    nome: true,
                    urlAvatar: true
                  }
                }
            }
        },
        disciplina:{
            select: {
              nome: true,
              urlImagem:true,
                turmas: {
                    select: {
                        nome: true
                    }
                }
            }
            }
        }
    });
    if (!tarefa) {
      return NextResponse.json({ message: 'Tarefa não encontrada.' }, { status: 404 });
    }
    const resultadoAtividade = {
        id: tarefa.id,
        nomeDisciplina: tarefa.disciplina.nome,
        nomeTurma: tarefa.disciplina.turmas[0].nome,
        nome: tarefa.nome,
        prazo: tarefa.prazo,
        cor: tarefa.cor,
        urlImagem: tarefa.disciplina.urlImagem,
        atividadesAluno: tarefa.atividadesAluno,
    }
    return NextResponse.json(resultadoAtividade);
  }
  return NextResponse.json({ message: 'Usuário não autorizado.' }, { status: 401 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Erro ao obter as matérias.' }, { status: 500 });
  }
}