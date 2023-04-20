import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SNav = styled.nav`
  height: 60px;
  margin: 0 auto;
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  border-bottom: 1px solid var(--color-black);
  font-size: 1rem;
`;
const SH1 = styled.h1`
  margin-right: 50px;
  font-weight: bold;
  &:hover {
    opacity: 0.75;
  }
`;
const SUl = styled.ul`
  width: 40%;
  display: flex;
  justify-content: space-between;
  gap: 1em;
  & li:hover {
    opacity: 0.75;
  }
`;

const Nav = () => {
  return (
    <SNav>
      <SH1>
        <Link to={'/'}>LOGO</Link>
      </SH1>
      <SUl>
        <li>
          <Link to={'/'}>menu</Link>
        </li>
        <li>
          <Link to={'/'}>menu</Link>
        </li>
        <li>
          <Link to={'/'}>menu</Link>
        </li>
      </SUl>
    </SNav>
  );
};

export default Nav;
