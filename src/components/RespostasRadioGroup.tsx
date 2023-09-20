import React from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";

interface RespostasRadioGroupProps {
  respostas: string[];
  selectedOption: number | null;
  handleRadioChange: (index: number) => void;
  letters: string[];
}

export function RespostasRadioGroup({
  respostas,
  selectedOption,
  handleRadioChange,
  letters,
}: RespostasRadioGroupProps) {
  return (
    <RadioGroup.Root
      className="w-100 dark:boder-white flex flex-col gap-4 border-2 px-2 py-4 shadow-md  drop-shadow-sm dark:border-2"
      defaultValue="0"
      aria-label="Area de respostas"
    >
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
    </RadioGroup.Root>
  );
}
