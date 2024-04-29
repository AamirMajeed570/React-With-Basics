import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleEdit = () => {};
  const handleDelete = () => {};

  const handleAdd = () => {
    if (todo.trim() === "") return; // Don't add empty todos
    setTodos([...todos, { id: uuidv4(), todo: todo, isCompleted: false }]);
    setTodo("");
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    const id = e.target.name;
    const index = todos.findIndex(item => item.id === id);
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 h-[70vh]">
        <div className="addTodo">
          <h1 className="text-lg font-bold">Add a Todo</h1>
          <input
            onChange={handleChange}
            value={todo}
            className="w-1/2 "
            type="text"
          />
          <button
            onClick={handleAdd}
            className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6 "
          >
            Add
          </button>
        </div>
        <h2 className="text-lg font-bold">Your Todo</h2>
        <div className="todos">
          {todos.map((item) => (
            <div key={item.id} className="todo flex w-1/2 justify-between ">
              <input type="checkbox" name={item.id} onChange={handleCheckbox} />
              <div className={item.isCompleted ? "line-through" : ''}>{item.todo}</div>
              <div className="buttons">
                <button
                  onClick={handleEdit}
                  className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6 "
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6 "
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
