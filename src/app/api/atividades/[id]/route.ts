import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { Context } from 'node:vm';
import mongoose from 'mongoose';
import Atividade from '@/lib/schema';

export async function GET(request: Request, context: Context) {
  try {
    const ativityId = context.params.id;
    console.log(ativityId);
    const atividade = await prisma.atividade.findFirst({ where: { id: ativityId } });
    console.log(atividade);
    if (!atividade) { 
      return NextResponse.json({ message: "Atividade não encontrada" }, { status: 404 });
    }

    await mongoose.connect(`mongodb+srv://${process.env.USER_MONGODB}:${process.env.PASSWORD_MONGODB}@blindstudy.ndgj6vh.mongodb.net/`);
    const questions = await Atividade.findById(atividade?.idAtividadeMongoDB);
    mongoose.connection.close();

    if (!questions) {
      return NextResponse.json({ message: "Perguntas não encontradas" }, { status: 404 });
    }
    
    return NextResponse.json(questions);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Erro ao processar a requisição" }, { status: 500 });
  }
}
