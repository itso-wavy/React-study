import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  height: 80px;
  background-color: teal;
  display: flex;
  padding: 10px 30px;
  align-items: center;
  color: white;

  & h1 {
    font-size: 30px;
    margin: 0;
    flex-shrink: 0;
  }

  & nav {
    margin-left: auto;

    & ul {
      display: flex;
      list-style: none;
      gap: 0.5em;
      font-size: 1em;
    }

    & a,
    & button {
      padding: 5px 10px;
    }

    & button {
      background-color: pink;
      border-radius: 0.5em;
      transition: all 0.1s;

      &:hover {
        opacity: 0.85;
      }
    }
  }

  /* reset */
  a {
    text-decoration: none;
    display: inline-block;
    color: inherit;
  }

  button {
    background-color: transparent;
    border: none;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
    cursor: pointer;
  }
`;

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogout = () => {
    console.log('logout!');
  };

  return (
    <StyledHeader>
      <h1>
        <Link to='/'>A Typical Page</Link>
      </h1>
      {isLogin && (
        <nav>
          <ul>
            <li>
              <Link to={'/users'}>Users</Link>
            </li>
            <li>
              <Link to={'/admin'}>Admin</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </StyledHeader>
  );
};

export default Header;
