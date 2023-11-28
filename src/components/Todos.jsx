import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import styled from "styled-components";
import { RiDeleteBin6Line } from "react-icons/ri";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1>Todos</h1>
        {todos.map((todo) => (
          <TodoBox key={todo.id}>
            <div className="text">{todo.text}</div>
            <div className="buttons">
              <RiDeleteBin6Line
                fontSize={"25px"}
                className="delIcon"
                onClick={() => dispatch(removeTodo(todo.id))}
              />
            </div>
          </TodoBox>
        ))}
      </div>
    </>
  );
}

const TodoBox = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  border: 1px solid black;
  margin: 0 5px;
  border-radius: 5px;
  padding: 0 10px;
  margin-bottom: 10px;
  .text {
    flex-grow: 1;
  }

  .buttons input[type="checkbox"] {
    outline: 2px solid black;
    accent-color: green;
  }
  .buttons {
    width: 80px;
    flex-shrink: 0;
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    align-items: center;
  }
  .buttons .delIcon {
    font-weight: 100;
    cursor: pointer;
  }
`;

export default Todos;
