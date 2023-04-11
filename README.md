# 1. 개발환경 세팅

## 1) 프로젝트 생성

`npx create-react-app {project-name} --template basic-react` (간소화된 버전)

 <!-- npx create-react-app {project-name} --template typescript -->

- boilerplate [create-react-app](https://create-react-app.dev/) 사용
  > - 기본 디렉토리 구성
  > - react, react-dom, react-scripts 및 dependency 라이브러리 설치
  > - react-scripts를 사용하여 package.json에 npm command 정의

```js
// scripts
  start: react-scripts start,
  build: react-scripts build,
  test: react-scripts test,
  eject: react-scripts eject,
  serve: serve -s build,
  build-and-serve: npm run build && npm run serve
```

## 2) 서버 구동

`cd {project-name}` > `npm start`

## 3) 재렌더링

- 컴포넌트 처음부터 다시 코드가 실행됨
  - State가 변경된 컴포넌트
  - Props가 변경된 컴포넌트
  - 재렌더링된 컴포넌트 아래의 모든 컴포넌트
  - Contextㄹ르 참조하는 모든 컴포넌트
- memoization: 중복 계산 방지
  - 컴포넌트: React.memo
  - 함수: useCallback
  - 변수: useMemo
- 글로벌 State 관리 라이브러리: Redux, Recoil, Apollo Client
