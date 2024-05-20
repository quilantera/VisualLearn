
import * as RadioGroup from "@radix-ui/react-radio-group";
interface RespostasRadioGroupProps {
  respostas: string[];
  selectedOption: number | null;
  handleRadioChange: (index: number) => void;
  }

export function RespostasRadioGroup({
  respostas,
  selectedOption,
  handleRadioChange,
  }: RespostasRadioGroupProps) {
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  
  return (
    <>
      {respostas.map((resposta, index) => {
        const isSelected = selectedOption === index;
        return (
          <RadioGroup.Item
            className={`w-100 font-words border-1 font-medium flex items-center gap-4 sm:gap-[8px] rounded-lg sm:px-[8px] px-[16px] py-3 shadow-lg   ${
              isSelected
                ? "bg-primary-400 text-white dark:bg-yellow-500 dark:font-semibold dark:text-black"
                : "bg-white dark:bg-zinc-950 dark:border-2 dark:border-slate-100 "
            }`}
            key={index}
            value={String(index)}
            id={String(index)}
            onClick={() => handleRadioChange(index)}
            aria-label={`alternativa ${ letters[index] }:  ${selectedOption === index? "selecionado":""}`}
          >
            <div
              className={`flex h-8 w-8 items-center justify-center   rounded-full border-[3px]  text-center ${
                isSelected
                  ? " border-white dark:border-black"
                  : "border-primary-400 dark:border-white"
              } `}
            >
            <span >{letters[index]}</span>
            </div>
            <h3 className="w-[95%] text-left leading-relaxed tracking-wide"> {resposta}</h3>
            <RadioGroup.Indicator className="hidden focus:hidden" />
          </RadioGroup.Item>
        );
      })}
    </>
  );
}
