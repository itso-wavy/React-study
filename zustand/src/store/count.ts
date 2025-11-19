import { create } from "zustand";

type Store = {
  count: number;
  actions: {
    increase: () => void;
    decrease: () => void;
  };
};

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

/* 
// 잘못된 예시
export const useCount = () => {
  const count = useCountStore((store) => store.count);
  const { increase, decrease } = useCountStore((store) => store.actions);

  return { count, increase, decrease };
}; */
export const useCount = () => {
  const count = useCountStore((store) => store.count);
  return count;
};

export const useCountIncrease = () => {
  const increase = useCountStore((store) => store.actions.increase);
  return increase;
};

export const useCountDecrease = () => {
  const decrease = useCountStore((store) => store.actions.decrease);
  return decrease;
};
