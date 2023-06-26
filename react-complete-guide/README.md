# React

1. 반응: 사용자에 반응하여 UI를 렌더링하는-인터랙티브 웹 어플리케이션을 위한 JS SPA 개발 라이브러리
   - SPA: 반응성 향상으로 UX 개선, 서버와 클라이언트의 분리
2. state(, props, context) 변화에 의한 컴포넌트 평가 -> JSX 반환
   - 컴포넌트 기반 설계: 재사용성, 유연함, 선언형 프로그래밍
   - JSX: HTML+JS
   - 가상DOM -> 컴포넌트 트리 -> 실제 DOM 렌더링

## 컴포지션(state/props)

0. state: 컴포넌트의 상태
1. useState
2. 여러 state 다루기
3. 이전 state에 의존하는 state 업데이트
4. 양방향 바인딩
5. state 끌어올리기: 자식 간에 공유할 state를 부모 컴포넌트에 정의
6. 상향식 컴포넌트 통신
7. 이벤트 다루기: on-handle

## 조건부 렌더링

1. key: 렌더링 리스트의 안정적이고 고유한 id, 리액트가 동적 리스트 아이템을 구별하는 식별자

## 스타일링

1. 인라인 스타일링
2. styled-components
3. css module(css-in-js)

## 고급(context)

1. fragment
2. ReactDOM.createPortal: _모달_ 같은 컴포넌트를 DOM 안의 다른 위치에 렌더링
3. ref+ input defaultValue

   - useRef(useState 대체): native DOM 요소에 접근, event 핸들러 안에서 사용, 양방향 바인딩 대체

   - forwardRef, useImperativeHandle: 자녀 컴포넌트에 ref 속성을 전달할 때 사용
     - _ex: custom input 포커싱/스크롤링/value 가져오기_
     - _ex: 애니메이션 효과_

4. useEffect: 컴포넌트가 평가된 후에 콜백 함수 실행, 의존성을 통해 특정 작업의 실행 시점을 결정함

   - 부수효과:
     - _ex: http request / localStorage / timer 사용할 때_
   - 의존성 배열: 리랜더링에 관련한 state(컴포넌트 내/props/컴포넌트 내 함수에서 정의된 state/변수)
   - 클린업: 사이브이펙트 함수가 실행되기 전 실행, http request / validation 디바운싱(debouncing)

5. useReducer(useState 대체): 복잡한 state, state 업데이트 로직의 관리, 서로 연관된 state들 다루기(ex. _폼 데이터_)

   - 리듀서 함수는 최신 state 스냅샷을 가져와서 업데이트된 state를 반환
   - 입력값과 유효성을 결합하기 위해 사용할 수 있음
   - 순수성을 유지하기 위해 state를 직접 변환해서는 안 됨(push => concat )

```js
const [state, dispatchState] = useReducer(reducerFunc, initState, initFunc);

dispatchState(action); // action: {type, payload}
// dispatchState(action) => reducerFunc(state, action) => return newState
```

6. createContext: state, state 변경 함수
   - provider: 객체 컴포넌트 제공자
   - consumer/useContext: 소비자, 소비 컴포넌트는 모두 재렌더링되는 문제가 있음
     - consumer: 내부 함수 필요
     - `useContext(ctx)`

## 성능 최적화

- 컴포넌트 재평가 후 state, props, context 변화 감지시 재렌더링됨
- state 스케쥴링: 컴포넌트 최초 실행시에만 state 초기화, DOM 삭제 후 재생성되지 않는 한, state는 더 초기화되지 않고 갱신될 뿐
- 메모이제이션: 컴포넌트 재평가 비용 vs props 비교 비용
  - props 개수/컴포넌트 복잡도/자식 컴포넌트 개수
  - 상위 컴포넌트에서 사용하여 불필요한 재렌더링을 막을 수 있음

1. 컴포넌트: React.memo, 인자인 함수형 컴포넌트의 props 변화를 비교하고 변화 유무에 따라 재평가, 컴포넌트 트리의 주요 브랜치에서 사용, 원시값 props에 대해서만 효용
2. 함수: useCallback, 참조값 props-함수를 저장하여 렌더링시마다 재생성하지 않도록 함, 클로저를 이용하기 때문에 의존성 배열 내에 state를 지정해줘야 함

3. 변수: useMemo,
   - _정렬, 복잡한 로직, 루프의 계산 값 저장_

## 클래스 컴포넌트

1. 라이프사이클
   - componentDidMount(): 마운트시 호출(`useEffect(F, [])`)
   - componentDidUpdate(): (`useEffect(F, [value])`)
   - componentWillUnmount(): (`useEffect(() => {return() => {}}, [])`)
2. 오류 경계
   클래스형 컴포넌트에서 에러 발생시 어플리케이션 동작을 멈추지 않고 에러 처리하는 방법. jsx 내부가 아니면 try-catch 문을 사용할 수 없음
   - componentDidCatch()

## HTTP 요청

`react-scripts --openssl-legacy-provider start`
