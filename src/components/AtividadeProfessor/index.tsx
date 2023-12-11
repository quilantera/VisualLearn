import { AtividadeProfessorRoot } from "./AtividadeProfessorRoot";
import { BodyAtividadeProfessor } from "./BodyAtividadeProfessor";
import { FooterAtividadeProfessor } from "./FooterAtividadeProfessor";
import { HeaderAtividadeProfessor } from "./HeaderAtividadeProfessor";
import { ImagemAtividadeProfessor } from "./ImagemAtividadeProfessor";
import { PerguntaAtividadeProfessor } from "./PerguntaAtividadeProfessor";
import { RespostasAtividadeProfessor } from "./RespostasAtividadeProfessor";
import { TextoAtividadeProfessor } from "./TextoAtividadeProfessor";
import { VideoAtividadeProfessor } from "./VideoAtividadeProfessor";


export const AtividadeProfessor ={
    Root: AtividadeProfessorRoot,
    Header: HeaderAtividadeProfessor,
    Content: BodyAtividadeProfessor,
    Footer: FooterAtividadeProfessor,
    Pergunta: PerguntaAtividadeProfessor,
    Texto: TextoAtividadeProfessor,
    Respostas: RespostasAtividadeProfessor,
    Imagem: ImagemAtividadeProfessor,
    Video: VideoAtividadeProfessor
}