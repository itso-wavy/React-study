import styled from 'styled-components';

const Hero = () => {
  const SSection = styled.section`
    margin: 0 auto;
    height: 75vh;
    background: no-repeat center/cover
      url('https://images.unsplash.com/photo-1525973132219-a04334a76080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1685&q=80');
    position: relative;

    @media (min-width: 900px) {
      width: 80%;
    }
  `;
  const SH2 = styled.h2`
    position: absolute;
    bottom: 1em;
    left: 1.5em;
    text-transform: uppercase;
    color: var(--color-white);
  `;

  return (
    <SSection>
      <SH2 className='title'>hero section</SH2>
    </SSection>
  );
};

export default Hero;
