import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

// ts version
// interface Counter {
//   count: number
//   increase: (by: number) => void
// }

// export const useCounter = create<Counter>()(persist((set) => ({
//   count: 0,
//   increase: (by) => set((state) => ({ count: state.count + by })),
//   decrease: (by) => set((state) => ({ count: state.count - by })),
// })))

export const useCounter = create(
  devtools(
    persist(
      set => ({
        count: 0,
        increase: () => set(state => ({ count: state.count + 1 })),
        decrease: () => set(state => ({ count: state.count - 1 })),
        reset: () => set(state => ({ count: 0 })),
      }),
      { name: 'counter' }
    )
  )
);
