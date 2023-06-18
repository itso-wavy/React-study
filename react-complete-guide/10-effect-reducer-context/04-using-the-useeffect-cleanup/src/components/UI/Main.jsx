import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 3rem 1rem;
  font-weight: bolder;

  @media screen and (min-width: 400px) {
    padding: 3rem calc(50vw - 200px);
  }
`;

const Main = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
