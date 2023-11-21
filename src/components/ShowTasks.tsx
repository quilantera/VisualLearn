'use client'
import { Atividade } from "@/types/typesBanco";
import { TaskCard } from "./TaskCard";
import React, { useState } from 'react';
import { SearchInput } from "./SearchInput";
import { SortDropdown } from "./SortDropDown";
import { Search } from "lucide-react";
interface TaskCardProps {
  atividades: Atividade[];
}

export function ShowTasks({ atividades }:TaskCardProps){
  const [ordenacao, setOrdenacao] = useState<string>('prazoEnvio');
  const [busca, setBusca] = useState<string>('');
  const [expanded, setExpanded] = useState(false);

  const toggleSearchInput = () => {
    setExpanded(!expanded);
  };
  const getStatus = (atividade: Atividade) => {
    if (atividade.atividadesAluno && atividade.atividadesAluno[0]?.dataEntrega) {
      return "entregue";
    }
    if (new Date(atividade.prazo) < new Date()) {
      return "atraso";
    }
    return "pendente";
  };
  
  const ordenarAtividades = (atividades: Atividade[]) => {
   
    switch (ordenacao) {
      case 'prazoEnvio':
        return [...atividades].sort((a, b) => {
          const dataA = new Date(a.prazo);
          const dataB =  new Date(b.prazo);
        
          return  dataB.getTime() - dataA.getTime();
        });
        case 'status':
          return [...atividades].sort((a, b) => {
            const statusA = getStatus(a);
            const statusB = getStatus(b);
        
            // Define the order based on status
            const order = ['atraso', 'pendente', 'entregue'];
        
            return order.indexOf(statusA) - order.indexOf(statusB);
          });
      default:
        return [...atividades].sort((a, b) => a.disciplina!.nome.localeCompare(b.disciplina!.nome));
    }
  };

  const filtrarAtividades = (atividades: Atividade[]) => {
    return atividades.filter(
      (atividade) =>
        atividade.nome.toLowerCase().includes(busca.toLowerCase()) ||
        atividade.disciplina!.nome.toLowerCase().includes(busca.toLowerCase())
    );
  };

  const atividadesOrdenadas = ordenarAtividades(atividades);
  const atividadesFiltradas = filtrarAtividades(atividadesOrdenadas);
  return (
    <>
    <div className="scrollbar  mt-2 flex items-center justify-between w-full px-5">
      <SortDropdown ordenacao={ordenacao} onOrdenacaoChange={setOrdenacao} />
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
          <TaskCard key={index} atividade={atividade} materiaNome={atividade.disciplina!.nome} />
        ))}
      </div>
    </div>
    </>
  );
}
