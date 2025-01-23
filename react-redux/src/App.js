import './App.css';
import Redux from './components/Redux';
import { useDispatch } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() =>dispatch({type: 'INCREMENT'})}>Increment</button>
      <Redux />
      <button onClick={() =>dispatch({type: 'DECREMENT'})}>Decrement</button>  
    </>
  );
}

export default App;
