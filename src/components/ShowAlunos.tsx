'use client';
import { Atividade, AtividadeAluno, Usuario } from "@/types/typesBanco"
import { useState } from "react";
import { SortDropdown } from "./SortDropDown";
import { SearchInput } from "./SearchInput";
import { Search } from "lucide-react";
import { AlunoCard } from "./AlunoCard";

interface ShowAlunosProps{
    alunos: Usuario[];
    atividades: Atividade[];
}
export function ShowAlunos({alunos, atividades}: ShowAlunosProps){
    const [ordenacao, setOrdenacao] = useState<string>('nome');
  const [busca, setBusca] = useState<string>('');
  const [expanded, setExpanded] = useState(false);

  const toggleSearchInput = () => {
    setExpanded(!expanded);
  };
 
  const selectOrdenacao = ['nome', 'média'];
  
  function calculaMedia(id: string) {
    // Inicializa a soma como um array vazio
    let soma: number[] = [];

    // Mapeia as atividades e filtra as notas do aluno com o ID fornecido
    atividades.forEach((atividade) => {
        const notasAluno = atividade?.atividadesAluno?.filter(atv => atv.alunoId === id && atv.nota);
        
        // Se houver notas, adiciona ao array de soma
        if (notasAluno && notasAluno.length > 0) {
            soma.push(...notasAluno.map(atv => atv.nota || 0));
        }
    });

    // Se não houver notas, retorna 0
    if (soma.length === 0) {
        return 0;
    }

    // Calcula a média das notas
    const media = soma.reduce((acc, nota) => acc + nota, 0) / soma.length;

    return media;
}

function perguntasRespondidas(id: string){
  let soma: number[] = [];

    // Mapeia as atividades e filtra as notas do aluno com o ID fornecido
    atividades.forEach((atividade) => {
        const notasAluno = atividade?.atividadesAluno?.filter(atv => atv.alunoId === id && atv.nota);
        
        // Se houver notas, adiciona ao array de soma
        if (notasAluno && notasAluno.length > 0) {
            soma.push(...notasAluno.map(atv => atv.nota || 0));
        }
    });

    return soma.length;
}
  const ordenarAlunos = (alunos: Usuario[]) => {
    switch (ordenacao) {
      case 'média':
        return [...alunos].sort((a, b) => {  
          return  calculaMedia(b.id) - calculaMedia(a.id);
        });
     case 'nome':
      default:
        return [...alunos].sort((a, b) => a.nome.localeCompare(b.nome));
    }
  };

  const filtrarAlunos = (alunos: Usuario[]) => {
    return alunos.filter(
      (aluno) =>
        aluno.nome.toLowerCase().includes(busca.toLowerCase()) 
    );
  };

  const alunosOrdenados = ordenarAlunos(alunos);
  const alunosFiltrados = filtrarAlunos(alunosOrdenados);
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
        
        {alunosFiltrados.map((aluno, index) => (
          <AlunoCard key={index} aluno={aluno} atividadesRespondidas={perguntasRespondidas(aluno.id)} media={calculaMedia(aluno.id)}/>
        ))}
      </div>
    </div>
    </>
)
}