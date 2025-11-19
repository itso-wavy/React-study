import View from "@/components/counter/view";
import Controller from "@/components/counter/controller";

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">Counter</h1>
      <View />
      <Controller />
    </div>
  );
}
