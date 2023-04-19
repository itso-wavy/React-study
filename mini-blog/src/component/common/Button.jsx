import styled from 'styled-components';

const SButton = styled.button`
  /* padding: 8px 16px;
  font-size: 16px;
  border-width: 1px;
  border-radius: 8px;
  cursor: pointer; */
`;

const Button = ({ title, onClick }) => {
  return <SButton onClick={onClick}>{title || 'button'}</SButton>;
};

export default Button;
