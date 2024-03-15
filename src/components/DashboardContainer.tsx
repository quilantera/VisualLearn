"use client"
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import {  useState } from "react";
interface DashBoardContainerProps{
    children1: React.ReactNode;
    children2: React.ReactNode;
}


export function DashboardContainer({children1,children2}: DashBoardContainerProps) {
  
    const [value, setValue] = useState("alunos");
    return (
        <div >
             <div>
                <ToggleGroup.Root
                    type="single"
                    value={value}
                    className=" flex gap-1 w-fit"
                    onValueChange={(value) => {
                        if (value) setValue(value);
                    }}
                >
                    <ToggleGroup.Item value="atividades"
                    className={ `px-4 py-2 rounded min-w-[140px]  shadow-md dark:border dark:border-slate-100 duration-300 ${value === "atividades"? "bg-violet-900 text-white dark:bg-slate-50 dark:text-gray-900": "bg-gray-200 dark:bg-gray-900 shadow-xl"}`}>
                       Atividades
                    </ToggleGroup.Item>
                    <ToggleGroup.Item 
                    className={ `px-4 py-2 rounded min-w-[140px]  shadow-md dark:border dark:border-slate-100 duration-300   ${value === "alunos"? "bg-violet-900  text-white dark:bg-slate-50 dark:text-gray-900" : "  bg-gray-200 dark:bg-gray-900  shadow-xl"}`}
                    value="alunos">
                       Alunos
                    </ToggleGroup.Item>
                </ToggleGroup.Root>
            </div>
            <div className=" p-4 bg-slate-50 shadow-md drop-shadow-lg dark:bg-gray-900 dark:border-slate-300 dark:border">
            {  value === 'atividades' ?
            children1
             :value === 'alunos' ?
             children2: 
             <h2> Erro, por favor selecione uma opção acima</h2>
             }
            </div>
        </div>
       
    );
}
