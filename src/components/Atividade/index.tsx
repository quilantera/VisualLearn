import { AtividadeRoot } from "./AtividadeRoot";
import { BodyAtividade } from "./BodyAtividade";
import { FooterAtividade } from "./FooterAtividade";
import { HeaderAtividade } from "./HeaderAtividade";
import { QuestaoAtividade } from "./QuestaoAtividade";
import { RespostasAtividade } from "./RespostasAtividade";
import { RespostasRadioGroup } from "./RespostasRadioGroup";

export const Atividade ={
    Root: AtividadeRoot,
    Header: HeaderAtividade,
    Content: BodyAtividade,
    Footer: FooterAtividade,
    Questao: QuestaoAtividade,
    Respostas: RespostasAtividade,
    RespostasGroup: RespostasRadioGroup
}