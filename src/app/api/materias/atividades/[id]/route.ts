import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { Context } from 'vm';

interface activitiesProps {
    id: string;
    name: string;
    deadline: Date;
    activityMongodbUrl: string;
    subjectId: string;
    cor: string;
    urlFoto: string;
    activityAluno?: Object | 
    null | undefined;
}
export async function GET(request: Request, context: Context) {
    try {
        const emailAluno = request.headers.get('emailUser');
        const materiaId = context.params.id;
        if (!emailAluno ) {
          return NextResponse.json({ message: 'Usuário não encontrado.' }, { status: 401 });
        }
    
        const atividades = await prisma.atividade.findMany({
            where: {
              disciplina: { id: materiaId },
              atividadesAluno: { some: { aluno: { email: emailAluno } } }
            },
            include: {
              atividadesAluno: true
            }
          });
          
        return NextResponse.json(atividades);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Erro ao obter atividades.' }, { status: 500 });
    }
}
