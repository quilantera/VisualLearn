import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import prisma from '../../../../lib/prisma';
import jwt from 'jsonwebtoken';
// Definindo a interface do payload do token JWT
interface TokenPayload {
    id: string;
    role: string;
    teacherId: string;
  }
  export const dynamic = "force-dynamic"
export async function POST(req: Request){
    const { nome, cor , urlImagem, idProfessor, idTurma } =  await req.json();
    const cookieStore = cookies();
    const token = cookieStore.get('token');

    try {
        const userId = jwt.verify(token!.value, process.env.JWT_SECRET!) as { id: string };
        if(!userId){
            return NextResponse.json({ message: 'Token inválido.' }, { status: 401 });
            
        }
        const user = await prisma.usuario.findUnique({where: { id: userId.id}});
        // Verificar se o usuário tem a role de "COORDENADOR"
        if(!user) {
            return NextResponse.json({ message: 'usuário não encontrado' }, { status: 401 });
            
        }
        if (user.papel !== 'COORDENADOR') {
            return NextResponse.json({ message: 'Não autorizado' }, { status: 403 });
        }
        if(!prisma.usuario.findUnique({where: { id: idProfessor}})){
            return NextResponse.json({ message: 'professor não encontrado' }, { status: 401 });
        }
        if(!user.escolaId){
        return NextResponse.json({message: "usuario nao vinculado a escola"},{ status: 401})
        }
        const classExists = await prisma.turma.findFirst({
            where: {
            id: idTurma,
            escola: {
                id:  user.escolaId!
            },
            },
        });

        if (!classExists) {
            return NextResponse.json({ message: 'Classe não encontrada' },{status: 404});
        }

        const disciplinaCriada = await prisma.disciplina.create({
            data: {
              nome: nome,
              cor: cor,
              urlImagem: urlImagem,
              professor: {
                connect: { id: idProfessor } // Substitua pelo ID do professor
              },
              turmas: {
                connect: [{ id: idTurma}] // Substitua pelos IDs das turmas
              }
            }
          });
        NextResponse.json(disciplinaCriada);
        } catch (error) {
            console.error(error);
            NextResponse.json({ message: 'Erro ao criar matéria' }, {status: 500});
        }
}
