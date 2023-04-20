import styled from 'styled-components';

const SButton = styled.button`
  padding: 1em 5em;
  font-size: var(--font-size-small);
  font-weight: bold;
  background-color: var(--color-white);
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
`;

const Button = ({ text, onClick }) => {
  return <SButton onClick={onClick}>{text || 'button'}</SButton>;
};

export default Button;
