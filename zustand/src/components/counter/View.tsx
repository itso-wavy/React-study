import { useCount } from "@/store/count";

const View = () => {
  // const count = useCountStore((store) => store.count);
  const count = useCount();

  return <div>{count}</div>;
};

export default View;
