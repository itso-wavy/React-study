import React from 'react';

// npm i -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
// npm i -D postcss-loader
// npx tailwindcss init
// tailwind.config.js 수정
// postcss.config.js 생성
// app.js에 import 코드 추가

const TailwindComponent = () => {
  return (
    <div className='border border-gray-400 rounded-2xl p-2 m-2 flex justify-around items-center'>
      <strong className='m-0 text-gray-400'>Tailwind CSS</strong>
      <ul>
        <li>* Utility first Framework</li>
        <li>* 클래스명, 컴포넌트명을 고민할 필요가 없어요!</li>
        <li>
          * 컴포넌트 라이브러리: headless ui / chakra ui, material-ui, semantic
          ui
        </li>
      </ul>
    </div>
  );
};

export default TailwindComponent;
