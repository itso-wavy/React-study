import { useIncreaseCount, useDecreaseCount } from "@/store/count";
import { Button } from "../ui/button";

const Controller = () => {
  // const { increase, decrease } = useCountStore((store) => store.actions);
  const increase = useIncreaseCount();
  const decrease = useDecreaseCount();

  return (
    <div className="flex gap-2">
      <Button onClick={decrease}>-</Button>
      <Button onClick={increase}>+</Button>
    </div>
  );
};

export default Controller;
