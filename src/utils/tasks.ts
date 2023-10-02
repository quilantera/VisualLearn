export interface Task {
  id: string;
  materia: string;
  titulo: string;
  prazo: string;
  status: "atraso" | "pendente" | "entregue";
  link: string;
  foto: string;
  cor?: string;
}

export const bancoDeTasks: Task[] = [
  {
    id: "1",
    materia: "Matemática",
    titulo: "Áreas e Perímetros",
    prazo: "20/06/2023",
    status: "atraso",
    link: "/1",
    foto: "https://img.freepik.com/vetores-premium/fundo-de-elementos-de-matematica-dos-desenhos-animados_23-2148157674.jpg?w=2000",
    cor: "bg-blue-950"
  },
  {
    id: "2",
    materia: "Matemática",
    titulo: "Equações Quadráticas",
    prazo: "25/06/2023",
    status: "pendente",
    link: "/2",
    foto: "https://img.freepik.com/vetores-premium/fundo-de-elementos-de-matematica-dos-desenhos-animados_23-2148157674.jpg?w=2000",
    cor: "bg-blue-950"
  },
  // Adicione mais tarefas para Matemática conforme necessário

  {
    id: "3",
    materia: "Português",
    titulo: "Análise de Texto",
    prazo: "22/06/2023",
    status: "entregue",
    link: "/1",
    foto: "https://img.freepik.com/vetores-gratis/ilustracao-de-lingua-portuguesa-desenhada-a-mao_23-2149834176.jpg?w=2000",
    cor: "bg-orange-800"
  },
  {
    id: "4",
    materia: "Português",
    titulo: "Gramática Avançada",
    prazo: "27/06/2023",
    status: "pendente",
    link: "/1",
    foto: "https://img.freepik.com/vetores-gratis/ilustracao-de-lingua-portuguesa-desenhada-a-mao_23-2149834176.jpg?w=2000",
    cor: "bg-orange-800"
  },
  {
    id: "5",
    materia: "Ciências",
    titulo: "Experimento de Química",
    prazo: "25/06/2023",
    status: "pendente",
    link: "/1",
    foto: "https://img.freepik.com/vetores-gratis/objetos-de-laboratorio-de-ciencias_23-2148488312.jpg",
    cor: "bg-green-800"
  },
  {
    id: "6",
    materia: "Ciências",
    titulo: "Biologia Celular",
    prazo: "20/07/2023",
    status: "entregue",
    link: "/1",
    foto: "https://img.freepik.com/vetores-gratis/objetos-de-laboratorio-de-ciencias_23-2148488312.jpg",
    cor: "bg-green-800"
  },

  // Tarefas para História
  {
    id: "7",
    materia: "História",
    titulo: "Revolução Industrial",
    prazo: "30/06/2023",
    status: "atraso",
    link: "/1",
    foto: "https://img.freepik.com/vetores-gratis/fundo-do-dia-do-livro-mundial-com-elementos_23-2147779482.jpg",
    cor: "bg-yellow-600"
  },
  {
    id: "8",
    materia: "História",
    titulo: "Idade Média",
    prazo: "15/07/2023",
    status: "pendente",
    link: "/1",
    foto: "https://img.freepik.com/vetores-gratis/fundo-do-dia-do-livro-mundial-com-elementos_23-2147779482.jpg",
    cor: "bg-yellow-600"
  },

  // Tarefas para Geografia
  {
    id: "9",
    materia: "Geografia",
    titulo: "Climas do Mundo",
    prazo: "25/06/2023",
    status: "entregue",
    link: "/1",
    foto: "https://img.freepik.com/vetores-premium/simbolos-simples-do-planeta-terra-plana-dos-desenhos-animados-silhuetas-de-cores-vetoriais-de-design-de-circulo-de-mapa-globo-para-viagens-de-geografia-mundial_662353-640.jpg?w=2000",
    cor: "bg-teal-950"
  },
  {
    id: "10",
    materia: "Geografia",
    titulo: "Globalização",
    prazo: "10/07/2023",
    status: "pendente",
    link: "/1",
    foto: "https://img.freepik.com/vetores-premium/simbolos-simples-do-planeta-terra-plana-dos-desenhos-animados-silhuetas-de-cores-vetoriais-de-design-de-circulo-de-mapa-globo-para-viagens-de-geografia-mundial_662353-640.jpg?w=2000",
    cor: "bg-teal-950"
  },
  // Tarefas para Inglês
  {
    id: "11",
    materia: "Inglês",
    titulo: "Listening Exercise",
    prazo: "28/06/2023",
    status: "pendente",
    link: "/1",
    foto: "https://static.vecteezy.com/ti/vetor-gratis/p3/17300766-aprendendo-ingles-doodle-set-escola-de-idiomas-em-estilo-de-desenho-curso-online-de-ensino-de-idiomas-ilustracaoial-desenhada-a-mao-isolada-no-fundo-branco-vetor.jpg",
    cor: "bg-stone-700"
  },
  {
    id: "12",
    materia: "Inglês",
    titulo: "Reading Comprehension",
    prazo: "18/07/2023",
    status: "entregue",
    link: "/1",
    foto: "https://static.vecteezy.com/ti/vetor-gratis/p3/17300766-aprendendo-ingles-doodle-set-escola-de-idiomas-em-estilo-de-desenho-curso-online-de-ensino-de-idiomas-ilustracaoial-desenhada-a-mao-isolada-no-fundo-branco-vetor.jpg",
    cor: "bg-stone-700"
  },
  // Adicione mais tarefas para Português conforme necessário
];
