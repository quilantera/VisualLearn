 import { QuestoesAtividadeStudent } from "@/types/typesStudent"

const texto1= `Na superfície terrestre podemos observar a existência de vários tipos de terrenos: uns mais elevados, outros mais planos. Esse conjunto de formas variadas da superfície do nosso planeta é chamado de relevo. 
As características do relevo são modificadas por agentes internos e externos, que formam e transformam o modelado terrestre. 
As diferentes formas de relevo existentes são resultado da combinação das dinâmicas interna e externa da Terra.
Estudos geológicos demonstraram que o nosso planeta apresenta três grandes subdivisões internas: a crosta, o manto e o núcleo. 
Essas camadas diferenciam-se, principalmente, por causa de sua profundidade, composição e temperatura.`
const texto2 = `Estrutura interna da Terra
Crosta: é a camada mais superficial do nosso planeta, composta por rochas e minerais. Sua espessura média é de 40 km aproximadamente. Sua temperatura pode variar entre 800 ºC e 1000 ºC.
Manto: é a camada localizada entre a crosta e o núcleo. Sua espessura é de aproximadamente 2800 km e sua temperatura pode chegar a 2000 ºC.
O manto possui uma composição pastosa denominada magma.
Núcleo: é a região central do interior da Terra, composta em sua maioria por ferro e níquel. O núcleo é dividido em:
● Núcleo externo: Consiste em uma camada mais fluida, com cerca de 2200 km de espessura e temperatura de aproximadamente 3000 ºC.
● Núcleo interno: É a parte sólida do núcleo, com aproximadamente 1300 km de espessura que pode atingir 6000 ºC`
export const RelevosTerra:QuestoesAtividadeStudent={
    id:"916f7e4f-5324-4d39-adf9-8d6928c62ac0",
    nome: "Relevos Terrestres e Estrutura Interna da Terra ",
    questoes:[{
        pergunta:"Assinale a alternativa correta: ",
        respostas:["Existem apenas dois tipos de subdiviões internas: a crosta e o núcleo","O núcleo da Terra é mais frio que a crosta","O relevo é a existência de vários tipos de terrenos na Terra.","Há apenas uma forma de relevo existente na Terra"],
        respostaCorreta:2,
        textoAuxiliar:texto1,
        referenciaTexto:"TORREZANI, Neiva Camargo, Vontade de saber: geografia: 6o ano: ensino fundamental: anos finais.1. ed. — São Paulo: Quinteto Editorial, 2018.",
    },{
        pergunta:"Quais são as subdivisões internas do nosso planeta? ",
        respostas:["crosta, manto e núcleo.","profundidade, composição e temperatura.","relevo, superfície e combinações dinâmicas","Atmosfera, crosta e núcleo"],
        respostaCorreta:0,
        textoAuxiliar:texto1,
        referenciaTexto:"TORREZANI, Neiva Camargo, Vontade de saber: geografia: 6o ano: ensino fundamental: anos finais.1. ed. — São Paulo: Quinteto Editorial, 2018.",
   },{
        pergunta:"A crosta terrestre é a menor camada em espessura do planeta Terra. Ela é dividida nas porções continentais e oceânicas e possui um papel fundamental no desenvolvimento das atividades humanas. A crosta terrestre também é chamada de:",
        respostas:["biosfera","mesosfera.","troposfera.","litosfera"],
        respostaCorreta:3,
        urlImage:"https://firebasestorage.googleapis.com/v0/b/unesppp-c4395.appspot.com/o/images%2F1.jpg?alt=media&token=bc7d60c7-d0fd-44fb-ae53-3e5233041613",
        descricaoImagem:"Imagem das Camadas da terra: Crosta Terrestre, manto, núcleo, continentes situados sobre as placas tectônicas",
        referenciaImagem:"https://www.estudokids.com.br/camadas-da-terra/"
    },{
        pergunta:"A forma de relevo caracterizada pela elevada altitude, formada por processos endógenos e transformada por agentes erosivos, é corretamente chamada de",
        respostas:["falha.","montanha.","planície.","vale fluvial."],
        respostaCorreta:1,
    },{
        pergunta:"A astenosfera é uma pequena porção do manto superior, localizada logo abaixo da crosta terrestre, que possui características plásticas na sua formação. A astenosfera é responsável pela:",
        respostas:["movimentação das placas tectônicas, que formam a litosfera.","diminuição dos tremores de terra na superfície terrestre.","constituição rochosa da superfície da crosta terrestre.","emissão de ondas do campo magnético do planeta."],
        respostaCorreta:0,
    },{
        pergunta:` O _ é um composto pastoso formado pela liquefação das rochas no interior do planeta Terra, em especial no manto. Por meio do seu resfriamento, são formadas as rochas ígneas.
        Qual o termo que completa corretamente a lacuna acima?`,
        respostas:["Vapor","Magma.","Granito.","Ferro."],
        respostaCorreta:1,
    },{
        pergunta:` A partir das características das camadas terrestres, pode-se afirmar que:
        Qual o termo que completa corretamente a lacuna acima?`,
        respostas:["a crosta terrestre é formada por uma única placa tectônica.","o núcleo é formado por magma em estado líquido e pastoso.","o manto é uma camada sólida formada por ferro e níquel.","a crosta terrestre é a camada mais externa do planeta Terra."],
        respostaCorreta:3,
    },{
        pergunta:`De acordo com o texto, do que a crosta é composta? Qual é sua temperatura?`,
        respostas:["por rochas e minerais, com temperatura entre 800 ºC e 1000 ºC.","por rochas e minerais, com temperatura entre 100 ºC e 1000 ºC.","por composição pastosa denominada magma, com temperatura entre 800 ºC e 1000 ºC.","por ferro e níquel, com temperatura entre 3000 ºC e 6000 ºc"],
        respostaCorreta:1,
        textoAuxiliar:texto2,
        referenciaTexto:"TORREZANI, Neiva Camargo, Vontade de saber: geografia: 6o ano: ensino fundamental: anos finais.1. ed. — São Paulo: Quinteto Editorial, 2018.",
        urlImage:"https://firebasestorage.googleapis.com/v0/b/unesppp-c4395.appspot.com/o/images%2F1.jpg?alt=media&token=bc7d60c7-d0fd-44fb-ae53-3e5233041613",
        descricaoImagem:"Imagem das Camadas da terra: Crosta Terrestre, manto, núcleo, continentes situados sobre as placas tectônicas",
        referenciaImagem:"https://www.estudokids.com.br/camadas-da-terra/"
    },
    {
        pergunta:`Do que o manto é composto? Qual é sua temperatura?`,
        respostas:["possui uma composição pastosa (magma), sua temperatura pode chegar a 2000ºC.",
        "possui uma composição pastosa (magma), sua temperatura pode chegar a 4000ºC",
        "por rochas e minerais, com temperatura entre 800ºC e 1000ºC",
        "por ferro e níquel, com temperatura entre 3000ºC e 6000ºc"],
        respostaCorreta:0,
        textoAuxiliar:texto2,
        referenciaTexto:"TORREZANI, Neiva Camargo, Vontade de saber: geografia: 6o ano: ensino fundamental: anos finais.1. ed. — São Paulo: Quinteto Editorial, 2018.",
        urlImage:"https://firebasestorage.googleapis.com/v0/b/unesppp-c4395.appspot.com/o/images%2F1.jpg?alt=media&token=bc7d60c7-d0fd-44fb-ae53-3e5233041613",
        descricaoImagem:"Imagem das Camadas da terra: Crosta Terrestre, manto, núcleo, continentes situados sobre as placas tectônicas",
        referenciaImagem:"https://www.estudokids.com.br/camadas-da-terra/"
    },{
        pergunta:`Do que o núcleo é composto? Como é dividido o núcleo?`,
        respostas:["O núcleo da Terra, composto principalmente por ferro e níquel, é subdividido em duas partes: Crosta e Núcleo",
        "O núcleo da Terra, possui uma composição pastosa (magma) e é subdividido em duas partes: Interna e Externa",
        "O núcleo da Terra, composto principalmente por rochas e minerais, é subdividido em duas partes: crosta e núcleo",
        "O núcleo da Terra, composto principalmente por ferro e níquel, é subdividido em duas partes: Interna e Externa"],
        respostaCorreta:0,
        textoAuxiliar:texto2,
        referenciaTexto:"TORREZANI, Neiva Camargo, Vontade de saber: geografia: 6o ano: ensino fundamental: anos finais.1. ed. — São Paulo: Quinteto Editorial, 2018.",
        urlImage:"https://firebasestorage.googleapis.com/v0/b/unesppp-c4395.appspot.com/o/images%2F1.jpg?alt=media&token=bc7d60c7-d0fd-44fb-ae53-3e5233041613",
        descricaoImagem:"Imagem das Camadas da terra: Crosta Terrestre, manto, núcleo, continentes situados sobre as placas tectônicas",
        referenciaImagem:"https://www.estudokids.com.br/camadas-da-terra/"
    }]
}