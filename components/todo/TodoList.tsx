import React from "react";
import styled from "styled-components";
import { TodoType } from "../../types/todo";

const TodoListBlock = styled.ul`
  margin: 0 auto;
  margin-top: 50px;
`;

const TodoListItem = styled.li<{ isCompleted: boolean }>`
  display: flex;
  margin-bottom: 10px;
  text-decoration-line: ${(props) =>
    props.isCompleted ? "line-through" : "none"};

  .todo-toggle-completed-button {
    margin-left: auto;
    margin-right: 5px;
  }
`;

type TodoListProps = {
  todo: TodoType;
  deleteTodo: (targetId: number) => void;
  toggleCompleteTodo: (targetId: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({
  todo,
  deleteTodo,
  toggleCompleteTodo,
}) => {
  return (
    <TodoListBlock>
      {todo.length > 0 &&
        todo.map((item) => (
          <TodoListItem key={item.id} isCompleted={item.isCompleted}>
            {item.todo}
            <button
              className="todo-toggle-completed-button"
              onClick={() => toggleCompleteTodo(item.id)}
            >
              o
            </button>
            <button onClick={() => deleteTodo(item.id)}>x</button>
          </TodoListItem>
        ))}
    </TodoListBlock>
  );
};

export default TodoList;
