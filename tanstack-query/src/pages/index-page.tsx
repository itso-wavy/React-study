import { Link } from "react-router";

export default function IndexPage() {
  return (
    <div className="mx-auto mt-[300px] flex w-fit gap-4">
      <Link
        to="counter"
        className="rounded-md bg-black p-3 text-white hover:bg-black/80"
      >
        → counter
      </Link>
      <Link
        to="todo-list"
        className="rounded-md bg-black p-3 text-white hover:bg-black/80"
      >
        → todo-list
      </Link>
    </div>
  );
}
