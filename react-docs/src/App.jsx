import { useState } from 'react'
import './App.css'
import MyButton from './components/MyButton'
import { List } from './components/List'
import Todo from './components/Todo';

function App() {
  const [count,setCount] = useState(0);
  const addCount = () =>{
    setCount(count+1);
  }
  return (
    <>
      <h1>Hello creating Custom Button</h1>
      {/* <MyButton count={count} onClick={addCount}/>
      <List /> */}
      <Todo />
    </>
  )
}

export default App
