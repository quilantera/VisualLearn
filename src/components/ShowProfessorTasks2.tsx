'use client'

import { TaskCard } from "./TaskCard";
import React, { useState } from 'react';
import { SearchInput } from "./SearchInput";
import { SortDropdown } from "./SortDropDown";
import { Search } from "lucide-react";
import { tarefasProfessor } from "@/app/(authenticated)/professor/tarefas/page";
import { TaskProfessorCard } from "./TaskProfessorCard";
import { Atividade, AtividadeAluno } from "@/types/typesBanco";
import { TaskProfessorCard2 } from "./TaskProfessorCard2";
interface ShowProfessorTasksProps{
    atividades: Atividade[];
    nomeDisciplina: string;

}
export function ShowProfessorTasks2({ atividades, nomeDisciplina }:ShowProfessorTasksProps){

  const [ordenacao, setOrdenacao] = useState<string>('disciplina');
  const [busca, setBusca] = useState<string>('');
  const [expanded, setExpanded] = useState(false);

  const toggleSearchInput = () => {
    setExpanded(!expanded);
  };
 
  const selectOrdenacao = ['prazo', 'disciplina'];
  
  const ordenarAtividades = (atividades: Atividade[]) => {
    switch (ordenacao) {
      case 'prazo':
        return [...atividades].sort((a, b) => {
          const dataA = new Date(a.prazo);
          const dataB =  new Date(b.prazo);
        
          return  dataB.getTime() - dataA.getTime();
        });
     case 'nome':
      default:
        return [...atividades].sort((a, b) => a.nome.localeCompare(b.nome));
    }
  };

  const filtrarAtividades = (atividades: Atividade[]) => {
    return atividades.filter(
      (atividade) =>
        atividade.nome.toLowerCase().includes(busca.toLowerCase()) 
    );
  };

  const atividadesOrdenadas = ordenarAtividades(atividades);
  const atividadesFiltradas = filtrarAtividades(atividadesOrdenadas);
  return (
    <>
    <div className="scrollbar  mt-2 flex items-center justify-between w-full px-5">
      <SortDropdown ordenacao={ordenacao} onOrdenacaoChange={setOrdenacao} types={selectOrdenacao} />
      <div className=" flex items-center  ease-in duration-300 bg-white px-1 py-1 h-fit shadow-lg drop-shadow-md">
      {expanded && (
          <div
          className={` ease-in duration-300 ${
            expanded ? 'w-40 ' : 'w-0 '
          } overflow-hidden ml-2`}
        >
  
            <SearchInput busca={busca} onBuscaChange={setBusca} />
          </div>
        )}
        <button
          className="p-2"
          onClick={toggleSearchInput}
          aria-label="Toggle Search Input"
        >
          <span role="img" aria-label="Search">
            <Search/>
          </span>
        </button>
       
      </div>
    </div>
    <div className="scrollbar mt-2 max-h-[420px] w-full overflow-y-scroll px-5">
      <div className="flex flex-col gap-4 py-4 ">
        
        {atividadesFiltradas.map((atividade, index) => (
          <TaskProfessorCard2 key={index} atividade={atividade} materia={nomeDisciplina} totalAluno={atividade.atividadesAluno?.length||0} alunoResponderam={atividade.alunosResponderam} />
        ))}
      </div>
    </div>
    </>
  );
}