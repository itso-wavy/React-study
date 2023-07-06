# zustand

## 설치

```
# NPM
npm install zustand

# Yarn
yarn add zustand
```

```jsx
import { create } from 'zustand'

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
```

## 특징

- 스토어 훅을 생성하고 컴포넌트를 연결하면 끝, provider 필요치 않음!
- 불변 상태 모델을 기반
- 셀렉터(selectors)를 사용하여 수동으로 렌더 최적화를 적용하는 것이 권장됨

### redux와의 비교

- **zustand**

```jsx
import { create } from 'zustand'

const useCountStore = create((set) => ({
  count: 0,
  increment: (qty) => set((state) => ({ count: state.count + qty })),
  decrement: (qty) => set((state) => ({ count: state.count - qty })),
}))
```

```jsx
import { create } from 'zustand'

const countReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.qty }
    case 'decrement':
      return { count: state.count - action.qty }
    default:
      return state
  }
}

const useCountStore = create((set) => ({
  count: 0,
  dispatch: (action) => set((state) => countReducer(state, action)),
}))
```

- **Redux**

```jsx
import { createStore } from 'redux'
import { useSelector, useDispatch } from 'react-redux'

const initialState = {
  count: 0,
}

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.qty }
    case 'decrement':
      return { count: state.count - action.qty }
    default:
      return state
  }
}

const countStore = createStore(countReducer)
```

```jsx
import { createSlice, configureStore } from '@reduxjs/toolkit'

const countSlice = createSlice({
  name: 'count',
  initialState: { value: 0 },
  reducers: {
    incremented: (state, action) => {
      state.value += action.payload
    },
    decremented: (state, action) => {
      state.value -= action.payload
    },
  },
})

const countStore = configureStore({ reducer: countSlice.reducer })
```

### 상태 업데이트

```jsx
const useStore = create((set) => ({
  firstName: '',
  lastName: '',
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  updateLastName: (lastName) => set(() => ({ lastName: lastName })),
}))

function App() {
  const [firstName, updateFirstName] = useStore((state) => [state.firstName, state.updateFirstName])

  return (
    <main>
      <label>
        First name
        <input onChange={(e) => updateFirstName(e.currentTarget.value)} value={firstName} />
      </label>

      <p>
        Hello, <strong>{firstName}!</strong>
      </p>
    </main>
  )
}
```

### 상태 병합

set 함수는 상태를 하나의 레벨에서만 병합함

```jsx
import { create } from 'zustand'

const useCountStore = create((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))
```

```jsx
set((state) => ({ ...state, count: state.count + 1 }))
// =
set((state) => ({ count: state.count + 1 }))
```

## 권장 패턴(Flux 기반)

### 단일 스토어

전역 상태는 Zustand 스토어에 위치해야 합니다.
대규모 애플리케이션인 경우, Zustand는 스토어를 조각으로 나눌 수 있도록 지원합니다.

### set(setState)를 사용하여 스토어 업데이트

### 스토어 액션을 스토어와 함께 위치시키기

다른 Flux 라이브러리에서 발견되는 액션 및 리듀서를 사용하지 않고도 상태를 업데이트할 수 있습니다. 이러한 스토어 액션들은 아래에 표시된 것처럼 스토어에 직접 추가할 수 있습니다.

```jsx
const useBoundStore = create((set) => ({
 storeSliceA: ...,
 storeSliceB: ...,
 storeSliceC: ...,
 updateX: () => set(...),
 updateY: () => set(...),
}))

```

### redux와 유사한 패턴

Redux와 유사한 리듀서를 사용할 수 없을 경우, 스토어의 최상위 레벨에 dispatch 함수를 정의할 수 있습니다.

```jsx
const types = { increase: 'INCREASE', decrease: 'DECREASE' }

const reducer = (state, { type, by = 1 }) => {
  switch (type) {
    case types.increase:
      return { grumpiness: state.grumpiness + by }
    case types.decrease:
      return { grumpiness: state.grumpiness - by }
  }
}

const useGrumpyStore = create((set) => ({
  grumpiness: 0,
  dispatch: (args) => set((state) => reducer(state, args)),
}))

const dispatch = useGrumpyStore((state) => state.dispatch)
dispatch({ type: types.increase, by: 2 })
```

전역 스토어의 생성은 create 함수를 사용하여 이루어집니다. create 함수의 콜백 함수 내부에서 스토어의 초기 상태와 액션을 정의하고, set 함수를 통해 상태를 업데이트합니다.

## 실습

### store actions를 사용하지 않고

권장되는 사용 방법은 actions와 state를 스토어 내에서 함께 배치하는 것, 즉 액션을 상태와 함께 함께 위치시킴. 데이터와 액션이 함께 포함된 독립적인 스토어가 생성됨

- 가독성을 높이고 유지 보수를 용이하게 함

```jsx
export const useBoundStore = create((set) => ({
  count: 0,
  text: 'hello',
  inc: () => set((state) => ({ count: state.count + 1 })),
  setText: (text) => set({ text }),
}))
```

### 상태를 초기 값으로 재설정

- reset 액션을 추가

```jsx
import { create } from 'zustand'

// 상태 값 및 액션을 위한 타입 정의
const initialState = {
  salmon: 0,
  tuna: 0,
}

const useSlice = create((set, get) => ({
  ...initialState,

  addSalmon: (qty) => {
    set({ salmon: get().salmon + qty })
  },

  addTuna: (qty) => {
    set({ tuna: get().tuna + qty })
  },

  reset: () => {
    set(initialState)
  },
}))

export default useSlice
```

- 여러 개의 스토어를 한 번에 재설정

```jsx
import { create as _create, StateCreator } from 'zustand'

const resetters = []

export const create = (f) => {
  if (f === undefined) return create
  const store = _create(f)
  const initialState = store.getState()
  resetters.push(() => {
    store.setState(initialState, true)
  })
  return store
}

export const resetAllStores = () => {
  for (const resetter of resetters) {
    resetter()
  }
}
```

### props로 상태를 초기화

```jsx
import { createStore } from 'zustand';
import React, { createContext, useContext, useRef } from 'react';

// 상태 타입 및 액션 정의
interface BearProps {
  bears: number;
}

interface BearState extends BearProps {
  addBear: () => void;
}

type BearStore = ReturnType<typeof createBearStore>;

// 스토어 생성 함수
const createBearStore = (initProps?: Partial<BearProps>) => {
  const DEFAULT_PROPS: BearProps = {
    bears: 0,
  };
  return createStore<BearState>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    addBear: () => set((state) => ({ bears: state.bears + 1 })),
  }));
};

// React 컨텍스트 생성
export const BearContext = createContext<BearStore | null>(null);

// Provider 구현
function App() {
  const store = useRef(createBearStore()).current;
  return (
    <BearContext.Provider value={store}>
      <BasicConsumer />
    </BearContext.Provider>
  );
}

// Consumer 컴포넌트
function BasicConsumer() {
  const store = useContext(BearContext);
  if (!store) throw new Error('Missing BearContext.Provider in the tree');
  const bears = store.getState().bears;
  const addBear = store.getState().addBear;
  return (
    <>
      <div>{bears} Bears.</div>
      <button onClick={addBear}>Add bear</button>
    </>
  );
}

// Provider Wrapper
type BearProviderProps = React.PropsWithChildren<BearProps>;

function BearProvider({ children, ...props }: BearProviderProps) {
  const storeRef = useRef<BearStore>();
  if (!storeRef.current) {
    storeRef.current = createBearStore(props);
  }
  return (
    <BearContext.Provider value={storeRef.current}>
      {children}
    </BearContext.Provider>
  );
}

// 커스텀 훅으로 컨텍스트 로직 추출
function useBearContext<T>(
  selector: (state: BearState) => T,
  equalityFn?: (left: T, right: T) => boolean
): T {
  const store = useContext(BearContext);
  if (!store) throw new Error('Missing BearContext.Provider in the tree');
  return store.getState(selector, equalityFn);
}

// 커스텀 훅 사용 예시
function CommonConsumer() {
  const bears = useBearContext((s) => s.bears);
  const addBear = useBearContext((s) => s.addBear);
  return (
    <>
      <div>{bears} Bears.</div>
      <button onClick={addBear}>Add bear</button>
    </>
  );
}

// 전체 예시
function App2() {
  return (
    <BearProvider bears={2}>
      <CommonConsumer />
    </BearProvider>
  );
}

```

### 작은 개별 스토어로 분할

```jsx
export const createFishSlice = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
})

export const createFishSlice = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
})

// 위 개별 스토어 두개를 합친 바운드 스토어
import { create } from 'zustand'
import { createBearSlice } from './bearSlice'
import { createFishSlice } from './fishSlice'

export const useBoundStore = create((...a) => ({
  ...createBearSlice(...a),
  ...createFishSlice(...a),
}))
```

- React 컴포넌트에서의 사용법

```jsx
import { useBoundStore } from './stores/useBoundStore'

function App() {
  const bears = useBoundStore((state) => state.bears)
  const fishes = useBoundStore((state) => state.fishes)
  const addBear = useBoundStore((state) => state.addBear)
  return (
    <div>
      <h2>Number of bears: {bears}</h2>
      <h2>Number of fishes: {fishes}</h2>
      <button onClick={() => addBear()}>Add a bear</button>
    </div>
  )
}

export default App
```

- 여러 개의 스토어 동시 업데이트:

```jsx
import { createBearSlice } from './bearSlice'
import { createFishSlice } from './fishSlice'

export const createBearFishSlice = (set) => ({
  addBearAndFish: () => {
    createBearSlice(set).addBear()
    createFishSlice(set).addFish()
  },
})

// =>
import { create } from 'zustand'
import { createBearSlice } from './bearSlice'
import { createFishSlice } from './fishSlice'
import { createBearFishSlice } from './createBearFishSlice'

export const useBoundStore = create((...a) => ({
  ...createBearSlice(...a),
  ...createFishSlice(...a),
  ...createBearFishSlice(...a),
}))
```

## Recipes

https://docs.pmnd.rs/zustand/recipes/recipes

### Redux 데브 툴

```jsx
import { devtools } from 'zustand/middleware'

// 일반적인 액션 스토어와 함께 사용하면 "setState"로 액션을 기록합니다.
const useStore = create(devtools(store))
// Redux 스토어와 함께 사용하면 전체 액션 타입을 로그합니다.
const useStore = create(devtools(redux(reducer, initialState)))
// 데브 툴 비활성화 (예: 프로덕션 빌드에서)
const useStore = create(devtools(store, { enabled: false }))
```
