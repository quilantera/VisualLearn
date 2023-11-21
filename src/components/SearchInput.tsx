interface SearchInputProps {
    busca: string;
    onBuscaChange: (busca: string) => void;
  }
  
  export function SearchInput({ busca, onBuscaChange }: SearchInputProps) {
    return (
      <div className="flex flex-col">
        <input
          type="text"
          id="busca"
          className=" p-2"
          value={busca}
          onChange={(e) => onBuscaChange(e.target.value)}
        />
      </div>
    );
  }
  