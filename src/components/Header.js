import Link from "./Link";

const Header = () => {
  return (
    <div className='ui secondary pointing menu'>
      <Link className='item' href='/'>
        Accordion
      </Link>
      <Link className='item' href='/list'>
        Wiki Search
      </Link>
      <Link className='item' href='/dropdown'>
        Dropdown Menu
      </Link>
      <Link className='item' href='/translate'>
        Google Translate
      </Link>
    </div>
  );
};

export default Header;
