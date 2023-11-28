import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <div className="box">
        <h1>React | Redux | Todo </h1>
        <AddTodo />
        <Todos />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .box {
    margin-top: 50px;
    width: 500px;
    border: 1px solid black;
    border-radius: 5px;
    padding-top: 10px;
  }

  .box h1 {
    text-align: center;
  }
`;

export default App;
