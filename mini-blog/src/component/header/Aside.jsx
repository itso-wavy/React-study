import styled from 'styled-components';

const SAside = styled.aside`
  width: 100%;
  background-color: var(--color-primary);
  font-family: var(--font-family-heading);
  line-height: 1.5rem;
  text-align: center;
  color: var(--color-white);
  white-space: pre;
`;

const Aside = () => {
  return (
    <SAside>
      aside aside aside aside aside aside aside aside aside aside aside aside
      aside aside aside aside aside aside aside aside aside aside aside aside
      aside aside aside aside aside aside aside aside aside aside aside aside
      aside aside aside aside aside aside aside aside aside aside aside
    </SAside>
  );
};

export default Aside;
