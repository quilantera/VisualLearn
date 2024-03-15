import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
export const dynamic = 'force-dynamic'
export async function GET(request: Request) {
    const idUser = request.headers.get('idUser');
    try {
        if (!idUser) {
            return NextResponse.json({ message: 'id do usuário não encontrado.' }, { status: 400 });
          }
          const userWithSchoolAndActivities = await prisma.usuario.findUnique({
            where: {
            
              id: idUser,
            },
            select: {
              email: true,
              nome: true,
              urlAvatar: true,
              papel: true,
              turmas: {
                select:{  nome:true,
                  anoEscolar:true,
                }
              },
              escola: {
                select: {
                  nome: true, // Include the school name
                },
              },
              atividadesAluno: {
    
                select: {
                    dataEntrega: true,
                    nota: true
                },
              },
            },
          });
          return NextResponse.json(userWithSchoolAndActivities)
    }catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Erro ao buscar informacoes do usuario ' + error }, { status: 500 });
      }
}