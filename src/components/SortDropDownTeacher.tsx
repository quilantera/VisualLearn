import React, { useState } from 'react';

interface SortDropdownProps {
  options: string[];
  selectedOption: string;
  onSelectOption: (option: string) => void;
}

export const SortDropdownTeacher: React.FC<SortDropdownProps> = ({ options, selectedOption, onSelectOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: string) => {
    onSelectOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="bg-slate-50 dark:bg-gray-900 dark:border-slate-50 px-1 text-lg duration-300"
        onClick={handleToggleDropdown}
        aria-label="Toggle Sort Dropdown"
      >
        <span>{selectedOption}</span>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 shadow-lg rounded-lg mt-1">
          <ul className="py-1">
            {options.map((option, index) => (
              <li
                key={index}
                className="px-3 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => handleSelectOption(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
