
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { Context } from 'vm';
export const dynamic = "force-dynamic"
export async function GET( request: Request, context: Context) {
    try {
        const disciplinaId: string = context.params.id;
        const idUser: string | null = request.headers.get('idUser');
        if (!disciplinaId) {
            return NextResponse.json({ message: 'disciplina não encontrada.' }, { status: 400 });
        }
        if( !idUser ) {
          return NextResponse.json({ message: 'Usuário não encontrado.' }, { status: 400 });
        }
        const tarefas = await prisma.atividade.findMany({
          where: {
            disciplinaId: disciplinaId
          },
          include: {
            atividadesAluno :{
                where: {
                    alunoId: idUser
                }
            }
          }
        });
        
        return NextResponse.json( tarefas );
    } catch (err) {
        return NextResponse.json({ message: "erro ao buscar materia"+ err }, { status: 500});
    }
}