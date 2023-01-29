import { useState } from 'react';
import { GoChevronLeft, GoChevronDown } from 'react-icons/go';
function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const handleClick = (nextIndex) => {
    if (expandedIndex === nextIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(nextIndex);
    }
  };
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );
    return (
      <div key={item.id}>
        <div
          className='flex items-center justify-between p-3 border-b cursor-pointer bg-gray-50'
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className='p-5 border-b'>{item.content}</div>}
      </div>
    );
  });
  return <div className='border-t rounded border-x'>{renderedItems}</div>;
}

export default Accordion;
