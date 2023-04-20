import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SFooter = styled.footer`
  padding: 4.5em 0;
  background-color: var(--color-black);
  color: var(--color-primary);
`;
const SNav = styled.nav`
  width: 80%;
  margin: 0 auto;
  max-width: 1600px;
  font-size: var(--font-size-small);
  line-height: 3em;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;

  & h3 {
    text-align: center;
  }

  @media (min-width: 900px) {
    width: 60%;
  }
`;

const Footer = () => {
  return (
    <SFooter>
      <h2 className='sr-only'>footer</h2>
      <SNav>
        <ul>
          <li>
            <h3>Nav</h3>
          </li>
          <li>
            <Link to={'/'}>Nav list Nav list</Link>
          </li>
          <li>
            <Link to={'/'}>Nav list Nav list</Link>
          </li>
          <li>
            <Link to={'/'}>Nav list Nav list</Link>
          </li>
        </ul>
        <ul>
          <li>
            <h3>Nav</h3>
          </li>
          <li>
            <Link to={'/'}>Nav list Nav list</Link>
          </li>
          <li>
            <Link to={'/'}>Nav list Nav list</Link>
          </li>
          <li>
            <Link to={'/'}>Nav list Nav list</Link>
          </li>
        </ul>
        <ul>
          <li>
            <h3>Nav</h3>
          </li>
          <li>
            <Link to={'/'}>Nav list Nav list</Link>
          </li>
          <li>
            <Link to={'/'}>Nav list Nav list</Link>
          </li>
          <li>
            <Link to={'/'}>Nav list Nav list</Link>
          </li>
        </ul>
      </SNav>
    </SFooter>
  );
};

export default Footer;
