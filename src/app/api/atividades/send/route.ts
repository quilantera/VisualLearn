import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import prisma from '../../../../lib/prisma';
import jwt from 'jsonwebtoken';

export async function POST(request: Request) {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('token');

    if (!token) {
      return NextResponse.json({ message: 'Token não encontrado.' }, { status: 401 });
    }

    try {
      const userId = jwt.verify(token!.value, process.env.JWT_SECRET!) as { id: string };
      const user = await prisma.usuario.findUnique({ where: { id: userId.id } });

      if (!user) {
        return NextResponse.json({ message: 'Usuário não encontrado.' }, { status: 404 });
      }

      if (user.papel !== "ALUNO") {
        return NextResponse.json({ message: 'Usuário não Autorizado.' }, { status: 500 });
      }

      const { note, delivery, idActivity } = await request.json();
    
      const updatedActivity = await prisma.atividadeAluno.update({
        where: {
            id: parseInt(idActivity!)
        },
        data: {
          nota: parseInt(note),
          dataEntrega: delivery! // Corrigido o nome da propriedade
        }
      });

      return NextResponse.json({ message: 'Atividade enviada com sucesso!' }, { status: 200 });

    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Token inválido ou erro interno do servidor.' }, { status: 500 });
    }

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Erro interno do servidor.' }, { status: 500 });
  }
}
