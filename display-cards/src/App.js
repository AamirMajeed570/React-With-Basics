import './App.css';
import Cards from './components/Cards';
const data = [
  {
    id: 1,
    name: "Wallet 1",
  },
  {
    id: 2,
    name: "Wallet 2",
  },
  {
    id: 3,
    name: "Wallet 3",
  },
  {
    id: 4,
    name: "Wallet 4",
  },
  {
    id: 5,
    name: "Wallet 5",
  },
  {
    id: 6,
    name: "Wallet 6",
  }
]
function App() {
  return (
      <Cards data={data} />
  );
}

export default App;
