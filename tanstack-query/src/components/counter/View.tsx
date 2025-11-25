import { useCount, useCountStore } from "@/store/count";

const View = () => {
  const count = useCountStore((store) => store.count);

  return <div>{count}</div>;
};

export default View;
