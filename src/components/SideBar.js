import Link from './Link';

function SideBar() {
  const links = [
    { label: 'Dropdown', path: '/' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Buttons', path: '/buttons' },
  ];

  const rederedLinks = links.map((link) => {
    return (
      <Link key={link.label} to={link.path}>
        {link.label}
      </Link>
    );
  });
  return <div className='sticky top-0 flex flex-col '>{rederedLinks}</div>;
}

export default SideBar;
