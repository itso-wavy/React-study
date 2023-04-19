import Aside from './Aside';
import Nav from './Nav';
import Hero from './Hero';

const Header = ({ type = 'sub' }) => {
  return (
    <header>
      <Aside />
      <Nav />
      {type === 'home' && <Hero />}
    </header>
  );
};

export default Header;
