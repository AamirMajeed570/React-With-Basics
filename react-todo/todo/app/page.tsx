"use client";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  function addTodo() {
    if (inputValue.trim() === "") return;
    setTodos([...todos, inputValue]); // append new todo
    setInputValue(""); // clear input
  }

  function deleteTodo(value:any){
    const deleteTodo = todos.filter((data)=> data !== value)
    setTodos(deleteTodo)
  }

  return (
    <>
      <div>
        <h1>Hello creating my first NextJs project</h1>
        <h2>The Project name is Todo List</h2>
      </div>
      <div>
        <input
          type="text"
          name="todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a task"
        />
        <button type="submit" onClick={addTodo}>
          Submit
        </button>
      </div>
      <div>
        <ul>
          {todos.map((todo, index) => (
           <div>
             <li key={index}>{todo}</li> 
             <button type="submit" onClick={() => deleteTodo(todo)}>Delete</button>
           </div>
          ))}
        </ul>
      </div>
    </>
  );
}
