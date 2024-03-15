export interface AtividadeTeacher {
    id: string;
    nomeDisciplina: string;
    nomeTurma?: string;
    totalAlunosDisponiveis: number; // Ajuste conforme necessário
    alunosResponderam: number;
    nome: string;
    prazo: Date;
    cor: string,
    urlImagem: string;
    disciplinaId?: string;
    atividadesAluno?: AtividadeAlunoTeacher[];
}
export interface AtividadeAlunoTeacher {
    id: number;
    dataEntrega: Date | null;
    nota: number | null;
    atividadeId: string;
    alunoId: string;
    aluno: {
        nome: string;
        urlAvatar: string | null;
    };
}

export interface DisciplinasTeacher {
    id: string;
    nome: string;
    cor: string;
    urlImagem: string;
    professorId: string;
    turmas: {
        nome: string;
        alunos?: {
            nome: string;
        }[];
    }[];
}
export interface AlunosPorDisciplinaTeacher{
    id: string;
    nome: string;
    email: string;
    urlAvatar?: string;
    atividadesAluno:{
        dataEntrega?:Date;
        nota?:number;
    }[];
}

  
