import React, { useEffect, useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState(["Apple", "Mango"]);
  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setTodo([...todo, input]);
      setInput("");
    }
  };
  const deleteTodo = (index) => {
    console.log(index);
    const todoDelete = todo.filter((_, i) => i !== index);
    console.log(todoDelete);
    setTodo(todoDelete);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <form onSubmit={addTodo}>
        <input
          type="text"
          name="input"
          id="txt"
          value={input}
          onChange={handleChange}
        />
        <input type="submit" value="Add" />
      </form>
      {todo.map((data, index) => (
        <ul
          key={index}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <li>{data}</li>
          <li>
            <button onClick={() => deleteTodo(index)}>X</button>
          </li>
        </ul>
      ))}
    </>
  );
};

export default Todo;
