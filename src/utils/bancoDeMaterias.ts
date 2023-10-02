export interface Materia {
  id: number;
  nome: string;
  professor: string;
  nomeURL: string;
  cor?:string;
}

export const bancoDeMaterias: Materia[] = [
  { id: 1, nome: "Matemática", professor: "José Silva", nomeURL: "matematica", cor: "bg-blue-950" },
  {
    id: 2,
    nome: "Português",
    professor: "Maria Oliveira",
    nomeURL: "portugues",
    cor: "bg-orange-800",
  },
  { id: 3, nome: "História", professor: "Carlos Santos", nomeURL: "historia", cor: "bg-yellow-600" },
  { id: 4, nome: "Ciências", professor: "Ana Ferreira", nomeURL: "ciencias", cor: "bg-green-800" },
  {
    id: 5,
    nome: "Geografia",
    professor: "Ricardo Alves",
    nomeURL: "geografia",
    cor: "bg-teal-950",
  },
  { id: 6, nome: "Inglês", professor: "Patricia Lima", nomeURL: "ingles", cor: "bg-stone-700" },
];
