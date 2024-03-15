import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { Context } from 'vm';
export const dynamic = "force-dynamic"
export async function GET(request: Request, context: Context) {
  const idUser = request.headers.get('idUser');
  try {
    const idDisciplina = context.params.id;
    if (!idUser) {
      return NextResponse.json({ message: 'E-mail do usuário não fornecido.' }, { status: 400 });
    }
    const user = await prisma.usuario.findUnique({where: { id: idUser }});
    if(!user) {
      return NextResponse.json({message: 'Usuário não encontrado.'}, { status: 400 });
    }
    if(user.papel === "PROFESSOR"){
    const disciplina = await prisma.disciplina.findUnique({
      where: { id: idDisciplina , professorId: user.id },
      include: {
        turmas: {
          select:{
            nome: true,
            alunos:{
                select:{
                    nome: true
                }
            }
          }
        }
        
      }
    });
    if (!disciplina) {
      return NextResponse.json({ message: 'Matéria nao encontrada.' }, { status: 404 });
    }
    
    return NextResponse.json(disciplina);
  }
  return NextResponse.json({ message: 'Usuário não autorizado.' }, { status: 401 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Erro ao obter as matérias.' }, { status: 500 });
  }
}