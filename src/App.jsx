import { useState } from "react";
import Todo from "./Todo";
export const DUMMY_TODOS = ["Learn React", "Practice React", "Profit!"];

function App() {
  return (
    <ul>
      {DUMMY_TODOS.map((item, index) => (
        <Todo key={index} item={item} />
      ))}
    </ul>
  );
}

export default App;
