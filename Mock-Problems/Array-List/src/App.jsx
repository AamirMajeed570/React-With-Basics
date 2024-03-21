import { useState } from "react";
import "./App.css";

function App() {
  const [arr, setArr] = useState(["Play Cricket", "Play Football", "Read Book"]);
  
  const handleDelete = (index) => {
    const newArr = [...arr];
    newArr.splice(index, 1); // Remove the item at the specified index
    setArr(newArr); // Update the state with the new array
  };

  return (
    <>
      <div>
        <h1>Array Mock Problem</h1>
        {arr.map((item, index) => {
          return (
            <ul className="ul" key={index}>
              <input type="checkbox" /> <li>{item}</li>
              <button onClick={() => handleDelete(index)}>X</button>
            </ul>
          );
        })}
      </div>
    </>
  );
}

export default App;
