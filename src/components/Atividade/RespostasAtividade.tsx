import * as RadioGroup from "@radix-ui/react-radio-group";

interface RespostasAtividadeProps{
    children: React.ReactNode
}
export function RespostasAtividade({children}: RespostasAtividadeProps){
    return (
    <form className="mt-4">
        <RadioGroup.Root
            className="w-100 dark:boder-white flex flex-col gap-4 border-2 px-2 py-4 shadow-md  drop-shadow-sm dark:border-2"
            defaultValue="0"
            aria-label="Area de respostas"
        >
            { children }
    </RadioGroup.Root>
  </form>
  );
}