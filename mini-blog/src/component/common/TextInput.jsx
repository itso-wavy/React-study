import styled from 'styled-components';
import Button from './Button';

const TextInput = ({ title, titleAlign, heigth, onClick }) => {
  const SSection = styled.section`
    display: flex;
    flex-direction: column;
    width: stretch;
    max-width: 650px;
    margin: 0 auto;
  `;
  const SH2 = styled.h2`
    text-align: ${titleAlign};
    margin-bottom: 1em;
  `;
  const STextarea = styled.textarea`
    width: 100%;
    height: ${heigth};
    padding: 1em;
    font-size: var(--font-size-normal);
    outline: none;

    /* @media (min-width: 900px) {
      width: 80%;
    } */
  `;
  const Wrapper = styled.div`
    margin-top: 2em;
    text-align: ${titleAlign === 'start' ? 'end' : 'center'};
  `;

  return (
    <>
      <SSection className='postWrite'>
        <SH2>{title}</SH2>
        <STextarea className='text-body'></STextarea>
        <Wrapper>
          <Button text='등록' onClick={onClick} />
        </Wrapper>
      </SSection>
    </>
  );
};

export default TextInput;
