import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = "force-dynamic"
export async function GET(request: Request) {
  const idAluno = request.headers.get('idUser');
    try {
       
        if (!idAluno ) {
          return NextResponse.json({ message: 'Usuário não encontrado.' }, { status: 401 });
        }
        const user = await prisma.usuario.findUnique({ where: { id: idAluno } });
 
        if (!user) {
          return NextResponse.json({ message: 'Usuário não encontrado.' }, { status: 401 });
        }
  
        if (user.papel !== 'ALUNO') {
          return NextResponse.json({ message: 'Usuário não Autorizado.' }, { status: 402 });
        }
        const atividades = await prisma.atividade.findMany({
            where: {
              atividadesAluno: { some: { aluno: { id: user.id } } }
            },
            include: {
              atividadesAluno: { where: { alunoId: user.id }},
              disciplina: { select: { nome: true}},
            }
          });
         
        return NextResponse.json(atividades);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Erro ao obter atividades.' }, { status: 500 });
    }
}
