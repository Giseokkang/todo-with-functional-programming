import React from "react";
import styled from "styled-components";

const TodoListItemBlock = styled.li``;

type TodoListItemProps = {};

const TodoListItem: React.FC<TodoListItemProps> = () => {
  return <TodoListItemBlock>hello world</TodoListItemBlock>;
};

export default TodoListItem;
