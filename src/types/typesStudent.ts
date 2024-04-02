export interface AtividadeStudent {
    id: string;
    nome: string;
    prazo: Date;
    cor: string;
    urlImagem: string;
    idAtividadeMongoDB: string;
    disciplinaId: string;
    disciplina:{
        nome: string;
    };
    atividadesAluno: AtividadeAlunoStudent[];
}
interface AtividadeAlunoStudent{
    id: number;
    dataEntrega: Date | null;
    nota: number | null;
    atividadeId: string;
    alunoId: string;
}
export interface QuestoesAtividadeStudent{
    nome: string;
    id?:string;
    questoes :Questoes[];
   }
   export interface Questoes {
    pergunta: string;
    urlImage?: string;
    respostas: string[];
    descricaoImagem?: string;
    referenciaImagem?: string;
    urlVideo?: string;
    respostaCorreta: number;
    textoAuxiliar?: string;
    referenciaTexto?: string;
     // Campo opcional para URL da imagem
   }

   export interface DisciplinasStudent{
    id: string;
    nome: string;
    cor?: string;
    urlImagem: string;
    professorId?: string;
    professor?: {
        nome: string;
    };
    turmas?: {
        nome:string
      }[];
    
    atividades?: AtividadeStudent[];
  }