import { create } from "zustand";
import {
  combine,
  subscribeWithSelector,
  persist,
  createJSONStorage,
  devtools,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type Store = {
  count: number;
  actions: {
    increase: () => void;
    decrease: () => void;
  };
};

// create(store)
// store = {state, actions} 또는 StateCreatorFn
export const useCountStore = create<Store>((set, _get) => ({
  count: 0,
  actions: {
    increase: () =>
      set((store) => ({
        count: store.count + 1,
      })),

    decrease: () =>
      set((store) => ({
        count: store.count - 1,
      })),
  },
}));
// 게터, 세터 메서드 제공
// const store = useCountStore.getState();
// useCountStore.setState((store) => ({
//   // ...
// }));

/* 
// 잘못된 예시
export const useCount = () => {
  const count = useCountStore((store) => store.count);
  const { increase, decrease } = useCountStore((store) => store.actions);

  return { count, increase, decrease };
}; */

/* Middleware */
// 1. combine: 첫번째 인수를 기준으로 store state 타입을 자동 추론해 줌
// const nextStateCreatorFn = combine(initialState, additionalStateCreatorFn)

export const useCountStore2 = create(
  combine({ count: 0 }, (set, _get) => ({
    actions: {
      increase: () =>
        set((state) => ({
          count: state.count + 1,
        })),
      decrease: () =>
        set((state) => ({
          count: state.count - 1,
        })),
    },
  })),
);

// 2. immer: 상태의 불변성 관리
// npm i immer
export const useCountStore3 = create<Store>((set, _get) => ({
  count: 0,
  actions: {
    increase: () =>
      set((store) => ({
        count: store.count + 1,
      })),
    decrease: () =>
      set((store) => ({
        count: store.count - 1,
      })),
  },
}));

export const useCountStore4 = create(
  immer(
    combine({ count: 0 }, (set, _get) => ({
      actions: {
        increase: () =>
          // set((state) => ({
          //   count: state.count + 1,
          // }));
          set((state) => (state.count += 1)),
        decrease: () =>
          // set((state) => ({
          //   count: state.count - 1,
          // }));
          set((state) => (state.count -= 1)),
      },
    })),
  ),
);

// 3. subscribeWithSelector: 상태를 부분 구독하고 콜백 함수를 실행(useEffect의 의존성과 비슷함)
// const nextStateCreatorFn = subscribeWithSelector(stateCreatorFn)

export const useCountStore5 = create(
  subscribeWithSelector(
    immer(
      combine({ count: 0 }, (set, _get) => ({
        actions: {
          increase: () => set((state) => (state.count += 1)),
          decrease: () => set((state) => (state.count -= 1)),
        },
      })),
    ),
  ),
);

useCountStore5.subscribe(
  (store) => store.count,
  (count, prevCount) => {
    // listener
    console.log(count, prevCount);
  },
);

// 4. persist: state을 브라우저 스토리지에 저장
export const useCountStore6 = create(
  persist(
    subscribeWithSelector(
      immer(
        combine({ count: 0 }, (set, _get) => ({
          actions: {
            increase: () => set((state) => (state.count += 1)),
            decrease: () => set((state) => (state.count -= 1)),
          },
        })),
      ),
    ),
    {
      name: "count",
      partialize: (store) => ({
        count: store.count,
      }),
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

// 5. devtools
export const useCountStore7 = create(
  devtools(
    persist(
      subscribeWithSelector(
        immer(
          combine({ count: 0 }, (set, _get) => ({
            actions: {
              increase: () =>
                set((state) => {
                  state.count += 1;
                }),
              decrease: () =>
                set((state) => {
                  state.count -= 1;
                }),
            },
          })),
        ),
      ),
      {
        name: "count",
        partialize: (store) => ({
          count: store.count,
        }),
        storage: createJSONStorage(() => localStorage),
      },
    ),
    {
      name: "count",
    },
  ),
);

// hooks
export const useCount = () => {
  const count = useCountStore7((store) => store.count);
  return count;
};

export const useCountIncrease = () => {
  const increase = useCountStore7((store) => store.actions.increase);
  return increase;
};

export const useCountDecrease = () => {
  const decrease = useCountStore7((store) => store.actions.decrease);
  return decrease;
};
