import * as RadioGroup from "@radix-ui/react-radio-group";

interface RespostasAtividadeProps{
    children: React.ReactNode
}
export function RespostasAtividade({children}: RespostasAtividadeProps){
    return (
    <form className="mt-4">
        <RadioGroup.Root
            className="w-100  flex flex-col gap-4 border-1 border-zinc-200 px-7 py-5 shadow-md bg-slate-300  rounded-md dark:bg-zinc-800 dark:border-white"
            defaultValue="0"
            aria-label="Area de respostas"
        >
            { children }
    </RadioGroup.Root>
  </form>
  );
}