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
            className={`w-100  border-1 flex items-center gap-4 rounded px-3   py-1 ${
              isSelected
                ? "bg-primary-400 text-white dark:bg-yellow-500 dark:font-semibold dark:text-black"
                : ""
            }`}
            key={index}
            value={String(index)}
            id={String(index)}
            onClick={() => handleRadioChange(index)}
          >
            <div
              className={`flex h-8 w-8 items-center justify-center   rounded-full border-[3px]  text-center ${
                isSelected
                  ? " border-white dark:border-black"
                  : "border-primary-400 dark:border-white"
              } `}
            >
              <h2>{letters[index]}</h2>
            </div>
            <h3> {resposta}</h3>
            <RadioGroup.Indicator className="hidden focus:hidden" />
          </RadioGroup.Item>
        );
      })}
    </>
  );
}
