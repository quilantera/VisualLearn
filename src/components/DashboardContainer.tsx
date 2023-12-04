"use client";
import { Atividade, Usuario, AtividadeAluno} from "@/types/typesBanco";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { useState } from "react";
import { ShowProfessorTasks2 } from "./ShowProfessorTasks2";
import { ShowAlunos } from "./ShowAlunos";


interface DashboardContainerProps {
    atividades: Atividade[];
    nomeDisciplina: string;
    alunos: Usuario[];

}
export function DashboardContainer({atividades, nomeDisciplina,alunos}: DashboardContainerProps) {
    const [value, setValue] = useState("atividades");
    return (
        <div>
            <div>
                <ToggleGroup.Root
                    type="single"
                    value={value}
                    onValueChange={(value) => {
                        if (value) setValue(value);
                    }}
                >
                    <ToggleGroup.Item value="atividades"
                    className="px-4 py-2 rounded">
                       Atividades
                    </ToggleGroup.Item>
                    <ToggleGroup.Item 
                    className="px-4 py-2 rounded"
                    value="alunos">
                       Alunos
                    </ToggleGroup.Item>
                </ToggleGroup.Root>
            </div>
            <div>
            {  value === 'atividades' ?
             <ShowProfessorTasks2 atividades={atividades!} nomeDisciplina={nomeDisciplina}/>: 
             value === 'alunos' ?
             <ShowAlunos alunos={alunos} atividades={atividades} />: 
             <h2> Erro, por favor selecione uma opção acima</h2>
             }
            </div>
        </div>
    );
}
