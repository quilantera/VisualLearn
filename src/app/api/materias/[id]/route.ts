
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { Context } from 'vm';
export const dynamic = "force-dynamic"
export async function GET( request: Request, context: Context) {
    try {
        const disciplinaId: string = context.params.id;
        const idUser: string | null = request.headers.get('idUser');
        if (!disciplinaId) {
            return NextResponse.json({ message: 'diciplina não encontrada.' }, { status: 400 });
        }
        if( !idUser ) {
          return NextResponse.json({ message: 'Usuário não encontrado.' }, { status: 400 });
        }
        const materia = await prisma.disciplina.findUnique({
          where: {
            id: disciplinaId,
          },
          include: {
            atividades: {
              include: {
                atividadesAluno: {
                  where: {
                    alunoId: idUser!,
                  }
                }
              }
            },
            professor: {
              select: {
                nome: true
              }
            }
          }
        });
        
        if(!materia){
            return NextResponse.json({ message: 'Materia nao encontrada.' }, { status: 404 });
        }
        return NextResponse.json( materia );
    } catch (err) {
        return NextResponse.json({ message: "erro ao buscar materia"+ err }, { status: 500});
    }
}