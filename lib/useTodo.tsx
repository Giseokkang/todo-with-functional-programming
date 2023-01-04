import { useEffect, useRef, useState } from "react";
import { TodoItemType, TodoType } from "../types/todo";
import { filter, map, push } from "./utils";

const useTodo = () => {
  const [todo, setTodo] = useState<TodoType>([]);
  const [isLoading, setIsLoading] = useState(true);
  const mounted = useRef(false);

  const setLocalStorageTodo = (todo: TodoType) => {
    window.localStorage.setItem("todo", JSON.stringify(todo));
  };

  useEffect(() => {
    const getLocalStorageTodo = () => {
      const todo = window.localStorage.getItem("todo");
      return todo ? JSON.parse(todo) : [];
    };
    setTodo(getLocalStorageTodo());
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      setLocalStorageTodo(todo);
    }
  }, [todo]);

  const addTodo = (todoItem: TodoItemType) => {
    setTodo(push(todo, todoItem));
  };

  const deleteTodo = (targetId: number) => {
    const filteredTodo = filter(todo, (item) => {
      return item?.id === targetId;
    });

    setTodo(filteredTodo);
  };

  const toggleCompleteTodo = (targetId: number) => {
    setTodo(
      map(todo, (item) => {
        if (item.id === targetId) {
          item.isCompleted = !item.isCompleted;
          return item;
        }
        return item;
      })
    );
  };

  return { todo, isLoading, addTodo, deleteTodo, toggleCompleteTodo };
};

export default useTodo;
