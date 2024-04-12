import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const handleEdit = () => {};
  const handleDelete = () => {};

  return (
    <>
      <Navbar />
      <div className="container my-5 rounded-xl p-5 bg-violet-100 min-h-full">
        <div className="addTodo">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <input type="text" className="w-80" />
          <button className="bg-violet-900 hover:bg-violet-950 p-4 py-1 mx-3 rounded-md text-white">
            Add
          </button>
        </div>

        <h2 className="text-xl font-bold">Your Todo's</h2>
        <div className="todos">
          <div className="todo flex justify-center">
            <div className="text">Lorem ipsum dolor sit amet.</div>
            <div className="buttons">
              <button
                onClick={handleEdit}
                className="bg-violet-900 hover:bg-violet-950 p-4 py-1 mx-3 rounded-md text-white"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="bg-violet-900 hover:bg-violet-950 p-4 py-1 mx-3 rounded-md text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
