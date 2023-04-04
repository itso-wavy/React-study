# 1. 개발환경 세팅

## 1) 프로젝트 생성

`npx create-react-app {project-name} --template basic-react` (간소화된 버전)

* boilerplate [create-react-app](https://create-react-app.dev/) 사용
  > * 기본 디렉토리 구성
  > * react, react-dom, react-scripts 및 dependency 라이브러리 설치
  > * react-scripts를 사용하여 package.json에 npm command 정의

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

<!-- FIXME: {}에 배열이 들어갔을 때 , 빼고 보여준다고 했던 것 같은데 -->
<!-- 함수() 형태는 넣을 수 없다고 함/ 
함수(props)는 가능함... 어떤 값을 넣어야 하는 듯-->
<!-- 컴포넌트는 함수임. 상수는 불가 -->
