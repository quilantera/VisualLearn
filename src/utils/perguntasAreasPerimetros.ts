import { Pergunta } from "@/app/(activities)/[activityId]/page";

interface PerguntaAreaPerimetro {
  pergunta: string;
  urlImage?: string;
  descricaoImagem?: string;
  respostas: string[];
  respostaCorreta: number;
  // Campo opcional para URL da imagem
}

export const perguntasAreasPerimetros: Pergunta[] = [
  {
    pergunta: "Qual é a fórmula para calcular a área de um retângulo?",
    descricaoImagem: "Imagem: Retângulo com base 'b' e altura 'h'.",
    respostas: ["A = b * h", "A = 2 * (b + h)", "A = b + h"],
    respostaCorreta: 0,
  },
  {
    pergunta: "Como se calcula o perímetro de um quadrado?",
    descricaoImagem: "Imagem: Quadrado com lado 'l'.",
    respostas: ["P = 4 * l", "P = 2 * l", "P = l * l"],
    respostaCorreta: 0,
  },
  {
    pergunta: "Qual é a fórmula da área de um círculo?",
    descricaoImagem: "Imagem: Círculo com raio 'r'.",
    respostas: ["A = π * r²", "A = 2 * π * r", "A = 0.5 * π * r"],
    respostaCorreta: 0,
  },
  {
    pergunta: "Como se calcula o perímetro de um triângulo?",
    descricaoImagem: "Imagem: Triângulo com lados 'a', 'b' e 'c'.",
    respostas: ["P = a + b + c", "P = 2 * (a + b + c)", "P = a * b * c"],
    respostaCorreta: 0,
  },
  {
    pergunta: "Qual é a fórmula da área de um trapézio?",
    descricaoImagem: "Imagem: Trapézio com bases 'B' e 'b' e altura 'h'.",
    respostas: ["A = (B + b) * h / 2", "A = B * b * h", "A = B + b + h"],
    respostaCorreta: 0,
  },
  {
    pergunta: "Como se calcula o perímetro de um círculo?",
    descricaoImagem: "Imagem: Círculo com raio 'r'.",
    respostas: [
      "Não se calcula perímetro de um círculo",
      "P = 2 * π * r",
      "P = π * r²",
    ],
    respostaCorreta: 1,
  },
  {
    pergunta: "Qual é a fórmula da área de um quadrado?",
    descricaoImagem: "Imagem: Quadrado com lado 'l'.",
    respostas: ["A = l * l", "A = 4 * l", "A = 2 * l"],
    respostaCorreta: 0,
  },
  {
    pergunta: "Como se calcula o perímetro de um retângulo?",
    descricaoImagem: "Imagem: Retângulo com base 'b' e altura 'h'.",
    respostas: ["P = 2 * (b + h)", "P = b * h", "P = 2 * b + 2 * h"],
    respostaCorreta: 2,
  },
  {
    pergunta: "Qual é a fórmula da área de um círculo em termos do diâmetro?",
    descricaoImagem: "Imagem: Círculo com diâmetro 'd'.",
    respostas: ["A = π * (d/2)²", "A = π * d²", "A = 2 * π * r"],
    respostaCorreta: 0,
  },
  {
    pergunta: "Como se calcula o perímetro de um trapézio?",
    descricaoImagem: "Imagem: Trapézio com bases 'B' e 'b' e altura 'h'.",
    respostas: ["P = B + b + 2 * h", "P = (B + b) * h", "P = B * b * h"],
    respostaCorreta: 0,
  },
];
