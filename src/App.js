import Dropdown from './components/Dropdown';
import { useState } from 'react';
function App() {
  const [selection, setSelection] = useState(null);
  const handleSelection = (option) => {
    setSelection(option);
  };
  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green' },
  ];
  return (
    <Dropdown options={options} value={selection} onChange={handleSelection} />
  );
}
export default App;
