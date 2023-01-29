import Accordion from './components/Accordion';
function App() {
  const items = [
    { id: '1', label: 'Can I use React on project?', content: 'Yes1' },
    { id: '2', label: 'Can I use React on project?', content: 'Yes2' },
    { id: '3', label: 'Can I use React on project?', content: 'Yes3' },
  ];
  return <Accordion items={items} />;
}
export default App;
