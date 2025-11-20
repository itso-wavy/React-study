import { useCount, useCountStore7 } from "@/store/count";

const View = () => {
  // const count = useCountStore((store) => store.count);
  // const count = useCount();

  const count = useCountStore7((store) => store.count);
  return count;

  return <div>{count}</div>;
};

export default View;
