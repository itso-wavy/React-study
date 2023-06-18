# React

1. 반응: 사용자에 반응하여 UI를 렌더링하는-인터랙티브 웹 어플리케이션을 위한 JS 라이브러리
1. SPA: 반응성 향상으로 UX 개선, 서버와 클라이언트의 분리
1. 컴포넌트 기반 설계: 재사용성, 유연함, 선언형 프로그래밍
1. JSX: HTML+JS
1. 트리 셰이킹, 배포 자동화 등 다양한 기능

## 컴포지션(state/props)

1. useState
2. 여러 state 다루기
3. 이전 state에 의존하는 state 업데이트
4. 양방향 바인딩
5. state 끌어올리기: 자식 간에 공유할 state를 부모 컴포넌트에 정의
6. 상향식 컴포넌트 통신
7. 이벤트 다루기: on-handle

## 조건부 렌더링

1. key: 렌더링 리스트의 고유 id(식별자)

## 스타일링

1. 인라인 스타일링
2. styled-components
3. css module(css-in-js)

## 고급

1. fragment
2. createPortal: 컴포넌트를 DOM 안의 다른 위치에 렌더링
3. useRef: native DOM 요소에 접근, useState 대체, event 핸들러 안에서 사용
4. useEffect: 컴포넌트가 평가된 후에 콜백 함수 실행

   - 부수효과: http request / localStorage / timer 사용할 때
   - 의존성 배열: 리랜더링에 관련한 state(컴포넌트 내/props/컴포넌트 내 함수에서 정의된 state/변수)
   - 클린업: 사이브이펙트 함수가 실행되기 전 실행, http request / validation 디바운싱(debouncing)

5.
