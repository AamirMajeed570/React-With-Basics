import Navbar from "./components/Navbar";
import { data } from "./store";
import './App.css';
function App() {
  return (
        <>
  <Navbar />
  {data.length === 0 ? (
    <div>Loading...</div>
  ) : (
    <div className="cards-container">
      {data.map((item, index) => (
        <div className="cards" key={index}>
          <div className="title">{item.name}</div>
          <div className="image">
            <img src={item.image} alt={item.name} />
          </div>
        </div>
      ))}
    </div>
  )}
</>

  );
}

export default App;
