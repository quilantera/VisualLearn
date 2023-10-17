import {  NextResponse } from 'next/server';
import prisma from '../../../lib/prisma'
export async function POST(req : Request ) {
    const alunoId  = await req.json();

    try {
      const subjects =  prisma.subject.findMany({
        where: {
          classes: {
            classAlunos: {
              some: {
                alunoId: alunoId.get('alunoId') 
              },
            },
          },
        },
      });
  
      NextResponse.json(subjects);
    } catch (error) {
      console.error(error);
      NextResponse.json({ message: 'Erro ao obter as matérias.' },{status:500});
    }
}