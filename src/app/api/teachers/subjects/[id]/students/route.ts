import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { Context } from 'vm';
export const dynamic = 'force-dynamic'
export async function GET(request: Request, context: Context) {
  try {
    const idUser = request.headers.get('idUser');


    const disciplinaId = context.params.id; // Verifique se esse parâmetro está correto

    if (!idUser) {
      return NextResponse.json({ message: 'ID do usuário não encontrado.' }, { status: 400 });
    }

    const user = await prisma.usuario.findUnique({ where: { id: idUser } });

    if (!user) {
      return NextResponse.json({ message: 'Usuário não encontrado.' }, { status: 400 });
    }

    if (user.papel !== "PROFESSOR") {
      return NextResponse.json({ message: 'Usuário não autorizado.' }, { status: 401 });
    }
    const disciplina = await prisma.disciplina.findFirst({
        where:{ id: disciplinaId},
        select: {turmas: true},
    })
    if(!disciplina ||disciplina.turmas.length === 0) {
        return NextResponse.json({ message: 'Disciplina não encontrada.' }, { status: 400 });
    }
    const alunos = await prisma.usuario.findMany({
      where: {
        papel: "ALUNO",
        turmas: {
          some: {
            id: disciplina.turmas[0].id,
          },
        },
      },
      select: {
        id: true,
        nome: true,
        email: true,
        urlAvatar: true,
        atividadesAluno: {
          where: {
            atividade: {
              disciplinaId: disciplinaId,
            },
          },
          select:{
            dataEntrega: true,
            nota: true,


          }
        },
      },
    });
    if (!alunos || alunos.length === 0) {
      return NextResponse.json({ message: 'Alunos não encontrados.' }, { status: 400 });
    }

    return NextResponse.json(alunos);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Erro ao obter os alunos.' }, { status: 500 });
  }
}
