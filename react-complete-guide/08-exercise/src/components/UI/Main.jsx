import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  height: calc(100vh - 80px);
`;

const Main = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
