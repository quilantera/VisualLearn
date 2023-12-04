import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
export const dynamic = "force-dynamic"
export async function GET(request: Request) {
  const idUser = request.headers.get('idUser');
  try {

    if (!idUser) {
      return NextResponse.json({ message: 'E-mail do usuário não fornecido.' }, { status: 400 });
    }
    const user = await prisma.usuario.findUnique({where: { id: idUser }});
    if(!user) {
      return NextResponse.json({message: 'Usuário não encontrado.'}, { status: 400 });
    }
    if(user.papel === "PROFESSOR"){
    const disciplinas = await prisma.disciplina.findMany({
      where: { professorId: user.id },
    });
    if (!disciplinas|| disciplinas.length === 0) {
      return NextResponse.json({ message: 'Matérias nao encontradas.' }, { status: 404 });
    }
    
    return NextResponse.json(disciplinas);
  }
  return NextResponse.json({ message: 'Usuário não autorizado.' }, { status: 401 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Erro ao obter as matérias.' }, { status: 500 });
  }
}
