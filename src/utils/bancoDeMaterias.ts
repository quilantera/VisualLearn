export interface Materia {
  id: number;
  nome: string;
  professor: string;
  nomeURL: string;
}

export const bancoDeMaterias: Materia[] = [
  { id: 1, nome: "Matemática", professor: "José Silva", nomeURL: "matematica" },
  {
    id: 2,
    nome: "Português",
    professor: "Maria Oliveira",
    nomeURL: "portugues",
  },
  { id: 3, nome: "História", professor: "Carlos Santos", nomeURL: "historia" },
  { id: 4, nome: "Ciências", professor: "Ana Ferreira", nomeURL: "ciencias" },
  {
    id: 5,
    nome: "Geografia",
    professor: "Ricardo Alves",
    nomeURL: "geografia",
  },
  { id: 6, nome: "Inglês", professor: "Patricia Lima", nomeURL: "ingles" },
];
