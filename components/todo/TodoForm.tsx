import React, { useState } from "react";
import styled from "styled-components";
import { TodoItemType, TodoType } from "../../types/todo";

const TodoFormBlock = styled.form`
  input {
    width: 100%;
    height: 30px;
    border-radius: 5px;
    border: none;
    padding: 0 8px;
  }
`;

type TodoFormProps = {
  todo: TodoType;
  addTodo: (todoItem: TodoItemType) => void;
};

const TodoForm: React.FC<TodoFormProps> = ({ todo, addTodo }) => {
  const [todoText, setTodoText] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo({
      id: (todo[todo.length - 1] ? todo[todo.length - 1].id : 0) + 1,
      todo: todoText,
      isCompleted: false,
    });
    setTodoText("");
  };
  return (
    <TodoFormBlock onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="what are you going to do today?"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
    </TodoFormBlock>
  );
};

export default TodoForm;
