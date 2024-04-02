import { QuestoesAtividadeStudent } from "@/types/typesStudent"


const texto1: string = `Ontem à tarde, Greg foi ao bosque para juntar cogumelos. Depois de ter recolhido alguns,resolveu voltar para que a mãe fizesse uma omelete para o jantar. No caminho de retorno, ele achou um passarinho caído do ninho, parecendo ter a pata machucada. Greg o envolveu em sua blusa. Chegando à sua casa, ele mostrou o passarinho ao papai e à mamãe: “Olhem, ele está ferido. Precisamos tratá-lo!”. “Venha” – disse a mãe – “Vamos fazer uma caminha para ele [...]. Você lhe dará um pouco do miolo de pão ensopado na água.” Nesta manhã, o passarinho parecia
totalmente reavivado. 
Greg o levou até o seu ninho e depois foi para a escola com pena, porque queria ficar com o passarinho em casa, talvez, numa gaiola. “Não” – pensou o menino – “Foi melhor assim, pois o bichinho ficaria infeliz demais.” Depois da aula, Greg [...] viu o pássaro bem pertinho, sobre um portão. Greg parou, pensando que o animal ia fugir, mas não. O pássaro pulou [...] bastante contente. Greg se aproximou [...] e teve uma ideia. Na sua bolsa, sobrara ainda um pouco do seu lanche. Ele esmigalhou o pão e estendeu sua mão aberta. 
O passarinho hesitou, virou-se, e então, depressa, bicou uma migalha minúscula antes de sair voando para um galho baixo.
`;
const citacaoTexto1 =
    "MURAT, D’Annie. 365 histórias para cada dia do ano. Tradução: Martim G. Wollstein. Blumenau: Blu Editora, 2010. p.41. Fragmento.";
const descricaoImagem7 =
    "quadrinho 1: o gato pai diz ao filho jogando videogame: Messias, preciso te falar sobre a vida! e o filho responde: eu já sei. Quadrinho 2: o filho continua dizendo: vida são aqueles coraçãozinhos ali no canto. Pai, se você perder os três tem que começar de novo!, quadrinho 3: o pai sai refletindo: quem sou eu para discutir";
const texto2: string = `Nem sempre os colegas entendem a amizade entre meninos e meninas. Mas o melhor é não ligar para as piadinhas sobre namoro, assim a turma esquece o assunto. Se você encontrou uma pessoa legal, não interessa se é menino ou menina. Contar com um melhor amigo de outro sexo tem até vantagens.
Afinal, assim você vai poder entender mais como as meninas ou os meninos pensam.`;

export const InterpretacaoDeTexto: QuestoesAtividadeStudent = {
    id:"740d1c63-2bee-451e-a422-efe1c52c3b64",
    nome: " Interpretação de Texto",
    questoes: [
        {
            pergunta: " O que fez com que essa história acontecesse?",
            respostas: [
                "A mãe de Greg cuidar do passarinho",
                "A mãe de Greg fazer omelete para o jantar",
                "Greg achar um passarinho caído do ninho",
                "Greg procurar cogumelos para o jantar.",
            ],
            respostaCorreta: 3,
            textoAuxiliar: texto1,
            referenciaTexto: citacaoTexto1,
        },
        {
            pergunta:
                "De acordo com esse texto, depois da aula, Greg deu ao passarinho:",
            respostas: ["água.", "cogumelo.", "omelete.", "pão."],
            respostaCorreta: 3,
            textoAuxiliar: texto1,
            referenciaTexto: citacaoTexto1,
        },
        {
            pergunta: "Como Greg encontrou o passarinho ferido?",
            respostas: [
                "Ele o viu voando perto de sua casa.",
                "Ele o encontrou caído do ninho no bosque.",
                "Ele o achou na escola durante o intervalo.",
                "Ele o encontrou em um pet shop próximo.",
            ],
            respostaCorreta: 1,
            textoAuxiliar: texto1,
            referenciaTexto: citacaoTexto1,
        },
        {
            pergunta:
                "O que Greg decidiu fazer com o passarinho depois de cuidar dele em casa?",
            respostas: [
                "Colocá-lo em uma gaiola.",
                "Levar para a escola.",
                "Devolvê-lo ao ninho.",
                "Doar para um zoológico.",
            ],
            respostaCorreta: 2,
            textoAuxiliar: texto1,
            referenciaTexto: citacaoTexto1,
        },
        {
            pergunta:
                "A expressão “UÊBA!”, no primeiro quadrinho, indica que as formigas",
            respostas: [
                "desanimaram-se porque ninguém poderia empurrá-las.",
                "encontraram alguém que as empurrasse no balanço.",
                "alegraram-se porque teriam um tempo livre para brincar.",
                "reclamaram do pouco tempo de duração do recreio.",
            ],
            respostaCorreta: 2,
            urlImage:
                "https://firebasestorage.googleapis.com/v0/b/unesppp-c4395.appspot.com/o/images%2F5.png?alt=media&token=cf2bcc4f-5484-41b2-a68e-a86fa4b1117a",
            descricaoImagem:
                "primeiro quadrinho: a formiga diz: Muito bem Formigas! Meia Hora de Recreio!, as operárias dizem: UÊBA! Quadrinho 2: as formigas sobem em um balanço, Quadrinho 3: as formigas falam: Agora só falta empurrar!",
            referenciaImagem:
                "https://educacao.frutal.mg.gov.br/banco-de-atividades/ensino-fundamental/",
        },
        {
            pergunta:
                "Na frase:&quot; Agora só falta alguém pra empurrar. &quot;, a palavra destacada é um exemplo de linguagem:",
            respostas: ["formal", "regional", "técnica", "coloquial"],
            respostaCorreta: 3,
            urlImage:
                "https://firebasestorage.googleapis.com/v0/b/unesppp-c4395.appspot.com/o/images%2F5.png?alt=media&token=cf2bcc4f-5484-41b2-a68e-a86fa4b1117a",
            descricaoImagem:
                "primeiro quadrinho: a formiga diz: Muito bem Formigas! Meia Hora de Recreio!, as outras respondem: UÊBA! , Quadrinho 2: as formigas sobem em um balanço, Quadrinho 3: as formigas dizem: Agora só falta empurrar!",
            referenciaImagem:
                "https://educacao.frutal.mg.gov.br/banco-de-atividades/ensino-fundamental/",
        },
        {
            pergunta: `O humor da tira encontra-se em uma palavra que apresenta ambiguidade, isto é,
            duplo sentido. Identifique qual delas apresenta mais de um significado dentro do contexto.`,
            respostas: ["coraçõezinhos", "vida", "filho", "pai"],
            respostaCorreta: 0,
            urlImage:
                "https://firebasestorage.googleapis.com/v0/b/unesppp-c4395.appspot.com/o/images%2F7.png?alt=media&token=d5c44e60-703c-4bee-b9b7-2c09a80c4cd2",
            descricaoImagem: descricaoImagem7,
            referenciaImagem:
                "https://educacao.frutal.mg.gov.br/banco-de-atividades/ensino-fundamental/",
        },
        {
            pergunta: `Possivelmente o filho parece estar:`,
            respostas: [
                "assistindo desenho animado",
                "brincando com videogame",
                "lendo um livro",
                "ensinando o pai a usar o videogame",
            ],
            respostaCorreta: 1,
            urlImage:
                "https://firebasestorage.googleapis.com/v0/b/unesppp-c4395.appspot.com/o/images%2F7.png?alt=media&token=d5c44e60-703c-4bee-b9b7-2c09a80c4cd2",
            descricaoImagem: descricaoImagem7,
            referenciaImagem:
                "https://educacao.frutal.mg.gov.br/banco-de-atividades/ensino-fundamental/",
        },
        {
            pergunta: "O assunto desse texto é",
            respostas: [
                "a amizade entre menino e menina",
                "a forma de pensar das meninas.",
                "o encontro com uma pessoa legal.",
                "o respeito a pessoas diferentes.",
            ],
            respostaCorreta: 0,
            textoAuxiliar: texto2,
            referenciaTexto: "Revista Recreio, v. 6, n. 273, p. 12, jun. 2005.",
            referenciaImagem:
                "https://educacao.frutal.mg.gov.br/banco-de-atividades/ensino-fundamental/",
        },
        {
            pergunta:
                "Por que o texto sugere não se importar com piadinhas sobre namoro?",
            respostas: [
                "Aprendizado sobre como os meninos ou as meninas pensam.",
                "Aumento da popularidade na escola.",
                "Porque é melhor confrontar quem faz as piadas",
                "Porque assim a turma pode esquecer o assunto.",
            ],
            respostaCorreta: 3,
            textoAuxiliar: texto2,
            referenciaTexto: "Revista Recreio, v. 6, n. 273, p. 12, jun. 2005.",
            referenciaImagem:
                "https://educacao.frutal.mg.gov.br/banco-de-atividades/ensino-fundamental/",
        },
    ],
};
