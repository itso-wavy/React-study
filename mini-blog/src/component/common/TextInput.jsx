import styled from 'styled-components';

const STextarea = styled.textarea`
  /* width: calc(100% - 32px); */
  ${height =>
    height &&
    `
    height: ${height}px;
  `}/* padding: 16px;
  font-size: 16px;
  line-height: 20px; */
`;

const TextInput = ({ height, value, onChange }) => {
  return <STextarea height={height} value={value} onChange={onChange} />;
};

export default TextInput;
