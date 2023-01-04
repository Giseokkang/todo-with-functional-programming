import React, { useState } from "react";
import styled from "styled-components";
import useTodo from "../../lib/useTodo";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoWrapperBlock = styled.div`
  width: 400px;
  margin: 0 auto;
`;

type TodoWrapperProps = {};

const TodoWrapper: React.FC<TodoWrapperProps> = () => {
  const { todo, addTodo, deleteTodo, toggleCompleteTodo } = useTodo();

  return (
    <TodoWrapperBlock>
      <TodoForm todo={todo} addTodo={addTodo} />
      <TodoList
        todo={todo}
        deleteTodo={deleteTodo}
        toggleCompleteTodo={toggleCompleteTodo}
      />
    </TodoWrapperBlock>
  );
};

export default TodoWrapper;
