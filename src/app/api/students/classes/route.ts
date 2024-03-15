import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
export const dynamic = 'force-dynamic';
export async function GET(request: Request) {
    try {
        const idUser: string | null = request.headers.get('idUser');
        if (!idUser) {
            return NextResponse.json({ message: "Usuário não encontrado" }, { status: 404 });
        }
        
        const turma = await prisma.turma.findFirst({
            where: { alunos: { some: { id: idUser } } },
            select: {
                nome: true,
                anoEscolar: true,
            }
        });

        if (!turma) {
            return NextResponse.json({ message: "Turmas não encontradas" }, { status: 404 });
        }

        return NextResponse.json(turma);
    } catch (error) {
        console.error("Erro ao processar a solicitação:", error);
        return NextResponse.json({ message: "Ocorreu um erro ao processar a solicitação" }, { status: 500 });
    }
}
