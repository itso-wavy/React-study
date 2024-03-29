import styled from 'styled-components';

const SButton = styled.button`
  padding: 1em 5em;
  font-size: var(--font-size-small);
  font-weight: bold;
  background-color: ${props =>
    props.isFull ? 'var(--color-primary)' : 'var(--color-white)'};
  color: ${props =>
    !props.isFull ? 'var(--color-primary)' : 'var(--color-white)'};
  border: 1px solid var(--color-primary);
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
`;

const Button = ({ text, isFull, onClick }) => {
  return (
    <SButton isFull={isFull} onClick={onClick}>
      {text || 'button'}
    </SButton>
  );
};

export default Button;
