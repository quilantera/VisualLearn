import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function GET(request: Request) {
  try {
    const idUser = request.headers.get('idUser');

    if (!idUser) {
      return NextResponse.json({ message: 'E-mail do usuário não fornecido.' }, { status: 400 });
    }
    const materiasDoAluno = await prisma.usuario.findUnique({
      where: { id: idUser },
      select: {
        turmas: {
          select: {
            nome: true,
            materias: {
              include: {
                professor: {
                  select: {
                    nome: true
                  }
                }
              }
            }
          }
        }
      }
    });
    if (!materiasDoAluno?.turmas|| materiasDoAluno.turmas.length === 0) {
      return NextResponse.json({ message: 'Matérias nao encontradas.' }, { status: 404 });
    }
    
    const turma = materiasDoAluno?.turmas[0];
    return NextResponse.json(turma);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Erro ao obter as matérias.' }, { status: 500 });
  }
}
