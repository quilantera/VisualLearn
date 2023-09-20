import React from "react";
import { RespostasRadioGroup } from "./RespostasRadioGroup";
import Image from "next/image";

interface AtividadeBodyProps {
  pergunta: string;
  imagem: string;
  imagemDescricao: string;
  respostas: string[];
  selectedOption: number | null;
  handleRadioChange: (index: number) => void;
  proximaPergunta: () => void;
  perguntaAnterior: () => void;
  letters: string[];
}

export function AtividadeBody({
  pergunta,
  imagem,
  imagemDescricao,
  respostas,
  selectedOption,
  handleRadioChange,
  proximaPergunta,
  perguntaAnterior,
  letters,
}: AtividadeBodyProps) {
  return (
    <div className="mt-5 flex w-10/12 flex-col gap-3 rounded-xl bg-white p-10 shadow-2xl drop-shadow-lg dark:bg-gray-600">
      <div>
        <h2 className="text-lg dark:text-zinc-50">{pergunta}</h2>
        {imagem && (
          <div>
            <Image src={imagem} alt={imagemDescricao} />
          </div>
        )}
      </div>
      <form className="mt-4">
        <RespostasRadioGroup
          respostas={respostas}
          selectedOption={selectedOption}
          handleRadioChange={handleRadioChange}
          letters={letters}
        />
      </form>
      <div className="flex w-full items-center justify-end gap-4">
        <button
          className="w-[6rem] bg-red-700 p-2 text-white duration-300 hover:scale-105 hover:bg-red-800 "
          onClick={perguntaAnterior}
        >
          {" "}
          voltar
        </button>
        <button
          className="w-[6rem] bg-green-700 p-2 text-white duration-300 hover:scale-105 hover:bg-green-800"
          onClick={proximaPergunta}
        >
          {" "}
          Próxima
        </button>
      </div>
    </div>
  );
}
