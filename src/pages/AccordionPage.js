import Accordion from '../components/Accordion';
function AccordionPage() {
  const items = [
    { id: '1', label: 'Can I eat Apple?', content: 'Yes,you can eat apple.' },
    { id: '2', label: 'Can I eat banana?', content: 'Yes,you can banana.' },
    {
      id: '3',
      label: 'Can I eat candy?',
      content: 'No,you can not eat candy.',
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
