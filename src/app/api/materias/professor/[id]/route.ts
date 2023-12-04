import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { Context } from 'vm';


export const dynamic = "force-dynamic"
export async function GET(request: Request, context: Context) {
  const idUser = request.headers.get('idUser');
    try {
        const disciplinaId = context.params.id;
        if (!idUser ) {
          return NextResponse.json({ message: 'Usuário não encontrado.' }, { status: 401 });
        }
        const user = await prisma.usuario.findUnique({ where: { id: idUser } });
 
        if (!user) {
          return NextResponse.json({ message: 'Usuário não encontrado.' }, { status: 401 });
        }
  
        if (user.papel !== 'PROFESSOR') {
          return NextResponse.json({ message: 'Usuário não Autorizado.' }, { status: 402 });
        }
        const dadosDisciplina = await prisma.disciplina.findUnique({
            where: { id: disciplinaId },
            include: {
              professor:{
                select:{
                  nome:true
                },
              },
              turmas:{  
                include: {
                    alunos:true,
                }
              },
              atividades: {
                include:{
                atividadesAluno:true,
              }
            }
            },
          });
          
        if(!dadosDisciplina) {
            return NextResponse.json({message:'disciplina nao encontrada'}, {status:402})
        }
        console.log(dadosDisciplina);
        return NextResponse.json(dadosDisciplina);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Erro ao obter atividades.' }, { status: 500 });
    }
}
