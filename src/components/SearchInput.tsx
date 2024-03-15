"use client"
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useRef } from "react";

interface SearchInputProps{
  nameParams: string;
  placeholder: string;
}
  export function SearchInput({nameParams,placeholder}: SearchInputProps) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter(); 
    const inputRef = useRef<HTMLInputElement>(null); 
    const searchFilter = useCallback(
      (name: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString())
        if(value !==""){
        params.set(name, value)
        return params.toString()
        }else {
          params.delete(name);
        }
      },
      [searchParams]
    )
    const handleClick = () => {
      const busca = inputRef.current?.value || ''; // Pegar o valor diretamente do input
      router.push(pathname + '?' + searchFilter(nameParams, busca));
    };
    return (
      <div className="flex my-[12px] w-fit duration-300 bg-white dark:bg-gray-900 px-[16px] py-[8px] border-slate-500 border-2 dark:border-slate-50">
        <input
          type="text"
          id="busca"
          className=" bg-slate-50 dark:placeholder:text-slate-100   dark:bg-gray-800 dark:border-slate-50 px-1 text-lg duration-300  "
          ref={inputRef} 
          placeholder={placeholder}
        />
        <button type="button" onClick={handleClick} aria-label="botão filtrar" className="bg-violet-250 dark:border-2 dark:border-slate-50 dark:bg-gray-900 text-white p-[4px] rounded shadow-lg" > <Search/></button>
      </div>
    );
  }
  