import React from 'react';

// npm i @emotion/react @emotion/styled

/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
// import styled from '@emotion/styled';

const Emotion = () => {
  // 1) css(sass) 작성법
  const containerStyle = css`
    border: solid 1px teal;
    border-radius: 20px;
    padding: 0 13px;
    margin: 8px;
  `;

  return (
    <div css={containerStyle}>
      <h2>React styling</h2>
      <Emotion2 />
      <Emotion3 />
    </div>
  );
};

const Emotion2 = () => {
  // 2) JS 객체형 작성법
  const containerStyle = css({
    backgroundColor: 'lightgoldenrodyellow',
    padding: '8px',
    marginBottom: '8px',
  });

  const liStyle = css({
    marginTop: '5px',
  });

  return (
    <div css={containerStyle}>
      <ol>
        <li>인라인 스타일링</li>
        <li css={liStyle}>모듈 css</li>
        <li css={liStyle}>styled JSX</li>
        <li css={liStyle}>styled components</li>
        <li css={liStyle}>emotion</li>
        <li css={liStyle}>Tailwind CSS</li>
      </ol>
    </div>
  );
};

import styled from '@emotion/styled';
const Emotion3 = () => {
  return (
    <div>
      <SText>현재는 Emotion을 연습 중입니다!</SText>
    </div>
  );
};
// 3) styled components 작성법
const SText = styled.strong`
  display: inline-block;
  padding: 10px;
  color: gray;
  text-decoration: 3px lightblue wavy underline;
`;

export default Emotion;
