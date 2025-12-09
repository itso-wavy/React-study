import { type FormEvent, useState } from "react";

import { useMutation } from "@tanstack/react-query";

import { createTodo } from "@/api/create-todo";
import { useCreateTodoMutation } from "@/hooks/mutations/use-create-todo-mutation";

// import { useTodoActions } from "@/store/todos";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

const TodoEditor = () => {
  const [content, setContent] = useState("");
  // const todoActions = useTodoActions();

  const { mutate, isPending } = useCreateTodoMutation();

  const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (content.trim() === "") return;
    // todoActions.createTodo(content);
    // setContent("");

    mutate(content);
    setContent("");
  };

  return (
    <form onSubmit={handleAddTodo} className="flex gap-2">
      <Input
        value={content}
        placeholder="새로운 할일을 입력해 주세요."
        onChange={(e) => setContent(e.target.value)}
      />
      <Button disabled={isPending}>추가</Button>
    </form>
  );
};

export default TodoEditor;
