interface SortDropdownProps {
    ordenacao: string;
    onOrdenacaoChange: (ordenacao: string) => void;
    types?: string[];
  }
  
  export function SortDropdown({ ordenacao, onOrdenacaoChange,types }: SortDropdownProps) {
    return (
      <div className="mb-4 flex flex-col">
        <label htmlFor="ordenacao">Ordenar por:</label>
        <select
          id="ordenacao"
          className="ml-2 p-2"
          value={ordenacao}
          onChange={(e) => onOrdenacaoChange(e.target.value)}
          aria-label="Selecione uma opção de ordenação"
        >{ types ? types.map((type,index) =><option value={type} key={index}>{type} </option>) :
        <>
          <option value="nome">Matéria </option>
          <option value="prazoEnvio">Prazo</option>
          <option value="status">Status</option>
            </>
        }
        </select>
      </div>
    );
  }