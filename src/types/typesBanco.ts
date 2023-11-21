interface Professor {
    nome: string;
  }
  
  export interface AtividadeAluno {
    id: number;
    dataEntrega: Date | null;
    nota: number | null;
    atividade: Atividade;
    aluno: Usuario;
  }
  export interface Escola {
    id:       String ;
    nome:    String;
    cnpj :    String;
    urlLogo?:  String
    criadoEm: Date | null;
    usuarios?: Usuario[]
    turmas?: Turma[]
  }
  export interface Usuario {
    id: string;
    email: string;
    senha: string;
    nome: string;
    urlAvatar?: string | null;
    papel: string;
    dataCriacao: Date;
    escola?: Escola | null;
    escolaId?: string | null;
    turmas?: Turma[];
    materias?: Disciplina[];
    atividadesAluno?: AtividadeAluno[];
  }
  export interface Turma {
    id: string;
    nome: string;
    anoEscolar: Date;
    escola?: Escola;
    escolaId: string;
    alunos?: Usuario[];
    materias?: Disciplina[];
  }
  
  
  export interface Atividade {
    id: string;
    nome: string;
    prazo: Date;
    cor: string;
    urlImagem: string;
    idAtividadeMongoDB: string;
    disciplinaId: string;
    atividadesAluno: AtividadeAluno[];
    disciplina?: {
      nome: string;
    };
  }
  
  export interface Disciplina {
    id: string;
    nome: string;
    cor: string;
    urlImagem: string;
    professorId: string;
    professor?: Professor;
    atividades?: Atividade[];
  }
  
  export interface Materia {
    id: string;
    nome: string;
    cor: string;
    urlImagem: string;
    professorId: string;
    professor: Professor;
    atividades: Atividade[];
  }
  
  