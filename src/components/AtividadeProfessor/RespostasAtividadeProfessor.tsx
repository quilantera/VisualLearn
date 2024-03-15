import * as Form from '@radix-ui/react-form';
import { PlusCircle, Trash } from 'lucide-react';
import * as RadioGroup from "@radix-ui/react-radio-group";
interface RespostasAtividadeProfessorProps {
  respostas?: string[];
  respostaCorreta?: number;
  handleRespostasChange: (event: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  handleRespostaCorreta: (index: number) => void;
  handleRemoverAlternativa: (index: number) => void;
  handleAdicionarAlternativa: () => void;
}

export function RespostasAtividadeProfessor({
  respostas,
  respostaCorreta,
  handleRespostasChange,
  handleRespostaCorreta,
  handleRemoverAlternativa,
  handleAdicionarAlternativa,
}: RespostasAtividadeProfessorProps) {
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  return (
    <Form.Field name='respostas' className='mt-10'>
      <Form.Label className="text-xl font-medium leading-tight tracking-wide">
        Respostas
      </Form.Label>
      <RadioGroup.Root
            className="w-100  flex flex-col gap-4 border-1 border-zinc-200 px-7 py-5 shadow-md bg-slate-300  rounded-md dark:bg-gray-900 dark:border mt-3 "
            defaultValue="0"
            aria-label="Area de respostas"
      >
        {respostas?.map((resposta, index) => (
          <div key={index} 
          className={`w-100  border-1 flex items-center justify-between gap-4 rounded-lg  px-4 py-1 shadow-lg  
                 dark:border-slate-300 dark:border-2  ${ index === respostaCorreta
               ? "bg-primary-400 text-white dark:bg-yellow-500 dark:font-semibold dark:text-black"
               : "bg-white dark:bg-gray-900 "
           }`}>
                <RadioGroup.Item
                tabIndex={0}
                aria-label={`alternativa ${letters[index]}`}
                className={`w-full border-1 flex items-center gap-4`}
           
           value={String(index)}
           id={String(index)}
           onClick={() => handleRespostaCorreta(index)}
         >
           <div
             className={`flex h-8 w-8 items-center justify-center   rounded-full border-[3px]  text-center ${
               index === respostaCorreta
                 ? " border-white dark:border-black"
                 : "border-primary-400 dark:border-white"
             } `}
           >
             <h2>{letters[index]}</h2>
           </div>
           <input
                id={`resposta-text-${index}`}
                className="text-md font-medium bg-transparent w-9/12 p-1 focus:border-2"
                type="text"
                value={resposta}
                onChange={(e) => handleRespostasChange(e, index)}
                aria-labelledby={`resposta-label-${index}`}
                aria-label={`area de inserção do texto da resposta:  ${resposta}`}
              />
           
           
          <RadioGroup.Indicator className="hidden focus:hidden" />
          </RadioGroup.Item>
           <button
           type='button'
            onClick={() => handleRemoverAlternativa(index)}
            className={`self-end p-2 rounded shadow-sm hover:bg-red-500
              dark:text-slate-50
              hover:text-slate-50 duration-300
              ${ index === respostaCorreta
                ? "text-slate-50"
                : "text-gray-500"
            }
              `}
            aria-label={`Remover Alternativa ${letters[index]}`}
          >
            <Trash />
          </button>
          </div>
        ))}
         
        <div className="flex items-center gap-2">
          <button
            type='button'
            className="w-100 font-md hover:scale-105 duration-200  flex text-gray-600 items-center gap-4 rounded-lg relative px-4 py-1 shadow-lg bg-white dark:bg-gray-900 dark:border-slate-300 dark:border-2 dark:text-white"
            onClick={handleAdicionarAlternativa}
           
          >
            Adicionar Nova Alternativa <PlusCircle className="text-primary-400 dark:text-slate-50" size={34} />
          </button>
        </div>
        </RadioGroup.Root>
    </Form.Field>
  );
}
