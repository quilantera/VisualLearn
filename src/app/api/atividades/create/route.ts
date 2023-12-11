import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import mongoose from 'mongoose';
import Atividade from '@/lib/schema';

export async function POST(request: Request) {
  const { idUsuario, idDisciplina, atividade } = await request.json();

  try {
    if (!idUsuario) {
      return NextResponse.json({ message: 'id do usuário não encontrado.' }, { status: 400 });
    }

    const user = await prisma.usuario.findUnique({ where: { id: idUsuario } });

    if (!user) {
      return NextResponse.json({ message: 'Usuário não encontrado.' }, { status: 400 });
    }

    if (user.papel !== 'PROFESSOR') {
      return NextResponse.json({ message: 'Usuário não autenticado.' }, { status: 401 });
    }

    if (!atividade) {
      return NextResponse.json({ message: 'Atividade não encontrada.' }, { status: 400 });
    }
    const disciplina = await prisma.disciplina.findUnique({
        where: { id: idDisciplina },
        include:{ turmas:{  
            include: {
                alunos:true,
            }
          },
        }
      });
    if(!disciplina) {
        return NextResponse.json({ message: 'Disciplina não encontrada.' }, { status: 400 }); 
    }
    // Connect to MongoDB
    await mongoose.connect(`mongodb+srv://${process.env.USER_MONGODB}:${process.env.PASSWORD_MONGODB}@blindstudy.ndgj6vh.mongodb.net/`);
    const urlAtividade = await Atividade.create(atividade);
    if(!urlAtividade){
        return NextResponse.json({ message: 'Erro ao salvar atividade.' }, { status: 400 }); 
    }
    mongoose.connection.close();
    console.log(urlAtividade.id);
    console.log(idUsuario);
    console.log(idDisciplina);
    // Create activity with a one-week deadline
    const oneWeekFromNow = new Date();
    oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);
    const novaAtividade = {
        nome: atividade.nome, // Assuming atividade has a nome property
        prazo: oneWeekFromNow,
        cor: atividade.cor || 'bg-primary-500', // Use atividade.cor if provided, otherwise use default
        urlImagem: atividade.urlImagem || 'https://media.istockphoto.com/id/1095003184/vector/vector-bag-with-school-stationery.jpg?s=612x612&w=0&k=20&c=mAtn0PnqRVR8iQeBQ7TUlUD2kh4O9s-dGTpknyOwDTc=',
        idAtividadeMongoDB: urlAtividade.id, // Assuming urlAtividade is defined
        disciplinaId: idDisciplina
    }

    const createdActivity = await prisma.atividade.create({
        data: novaAtividade,
      });
    console.log(createdActivity);
    // Get all classes (turmas) of the given discipline (disciplina)
    

    // Extract all students from all classes
    const turmaIndex = 0; // Set the appropriate index based on your logic
    const allStudents = disciplina.turmas.length > turmaIndex ? disciplina.turmas[turmaIndex].alunos : [];

    // Create AtividadeAluno records for each student
    const atividadeAlunosData = await Promise.all(allStudents.map(async (student) => {
    return {
        dataEntrega: null,
        nota: null,
        atividadeId: createdActivity.id,
        alunoId: student.id,
    };
    }));

    // Use createMany to insert AtividadeAluno records in a single batch
    await prisma.atividadeAluno.createMany({
    data: atividadeAlunosData,
    });
   

    return NextResponse.json({ message: 'Atividade e AtividadeAluno criados com sucesso.' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Erro ao enviar a atividade: ' + error }, { status: 500 });
  }
}
