import { useState } from 'react';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDown, ChevronUp } from 'lucide-react';
import { AtividadeStudent } from '@/types/typesStudent';
import { useAccessibility } from '@/app/Context/AccessibilityContext';
interface SortOption {
    label: string;
    value: string;
}



interface SortDropdownProps {
    options: SortOption[];
    data: AtividadeStudent[]; // Altere para o tipo correto dos dados, se necessário
    onChange: (sortedData: AtividadeStudent[]) => void;
}

export function SortDropdown({ options, data, onChange }: SortDropdownProps) {
    const [selectedOption, setSelectedOption] = useState(options[0].value);
    const {isReady, setIsReady} = useAccessibility();

    const handleSelectChange = (selectedValue: string) => {
        setSelectedOption(selectedValue);
        sortData(selectedValue);
    };
    
    const getStatus = (atividade: AtividadeStudent) => {
      if (atividade.atividadesAluno && atividade.atividadesAluno[0]?.dataEntrega) {
        return "entregue";
      }
      if (new Date(atividade.prazo) < new Date()) {
        return "atraso";
      }
      return "pendente";
    };
    
    const sortData = (selectedValue: string) => {
        let sortedArray = [...data];
        switch (selectedValue) {
            case "nome":
                sortedArray.sort((a, b) => a.nome.localeCompare(b.nome));
                break;
            case "prazo":
                sortedArray.sort((a, b) => new Date(a.prazo).getTime() - new Date(b.prazo).getTime());
                break;
            case "status":
              case 'status':
              sortedArray.sort((a, b) => {
                const statusA = getStatus(a);
                const statusB = getStatus(b);
                // Define the order based on status
                const order = ['atraso', 'pendente', 'entregue'];
                 return order.indexOf(statusA) - order.indexOf(statusB);
          });  
            
            default:
                break;
        }
        onChange(sortedArray);
    };

    return (
        <div className="" tabIndex={0} >
            <label htmlFor="sortDropdown" className="text-gray mr-2 font-normal">
                Ordenar atividades por:
            </label> 

            <Select.Root onValueChange={handleSelectChange } >
            <Select.Trigger onClick={()=>setIsReady(!isReady)} className="flex border-2 bg-violet-950 dark:bg-gray-900  font-medium text-slate-50 border-slate-700 dark:border-slate-50 justify-between items-center w-full gap-4 py-2 pl-3 sm:py-1 rounded-md shadow-md cursor-pointer hover:bg-violet-950 hover:text-white duration-300" >
                <Select.Value  placeholder="padrão" />
                <Select.Icon className="SelectIcon">
                    <ChevronDown />
                </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
        <Select.Content className="overflow-hidden bg-slate-50 dark:bg-zinc-800 dark:border-2 dark:border-slate-50 rounded shadow-lg">
            <Select.Viewport className='px-2 py-3 min-w-[240px]'>
            {options.map((option, index) => (
                    <Select.Item key={index} value={option.value} className='pl-4 relative flex item-center font-medium  text-lg dark:text-slate-50 hover:bg-violet-950 dark:hover:bg-white dark:hover:text-black hover:text-white'>
                      <Select.ItemText>{option.label}</Select.ItemText>
                    <Select.ItemIndicator className="absolute left-0 top-1/2  font-medium -translate-y-1 flex items-center justify-center">
                        <CheckIcon className='h-3 w-3' />
                    </Select.ItemIndicator>

                    </Select.Item >
            ))}
            </Select.Viewport>
            <Select.ScrollDownButton className="SelectScrollButton">
                    <ChevronDown/>
            </Select.ScrollDownButton>
            </Select.Content>
            </Select.Portal>
            </Select.Root>
            
        </div>
    );
}
