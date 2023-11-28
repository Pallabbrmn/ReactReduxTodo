import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import styled from "styled-components";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <AddBox>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </AddBox>
  );
}

const AddBox = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  form {
    display: flex;
    gap: 3px;
    justify-content: center;
    align-items: center;
    padding: 0 8px;
  }

  input {
    height: 50px;
    width: 400px;
    outline: none;
    font-size: 20px;
    border-radius: 5px;
    padding: 0 5px;
    border: 1px solid black;
  }
  button {
    height: 50px;
    width: 80px;
    border-radius: 5px;
    border: 1px solid black;
    font-size: 17px;
    font-weight: 500;
    cursor: pointer;
  }
`;

export default AddTodo;
