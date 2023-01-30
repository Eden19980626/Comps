import { useState } from 'react';
import { GoChevronDown } from 'react-icons/go';
function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className='p-1 rounded cursor-pointer hover:bg-sky-100'
        key={option.value}
        onClick={() => handleOptionClick(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className='relative w-48'>
      <div
        className='flex items-center justify-between w-full p-3 bg-white border rounded shadow cursor-pointer'
        onClick={handleClick}
      >
        {value?.label || '選擇顏色'}
        <GoChevronDown className='text-lg' />
      </div>
      {isOpen && (
        <div className='absolute w-full p-3 bg-white border rounded shadow top-full'>
          {renderedOptions}
        </div>
      )}
    </div>
  );
}
export default Dropdown;
