import { useState } from 'react'
import './App.css'
import MyButton from './components/MyButton'
import { List } from './components/List'
import Todo from './components/Todo';
import ReactHooks from './components/ReactHooks';
import { UseRef } from './components/UseRef';
import UseMemo from './components/UseMemo';

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
      {/* <Todo /> */}
      {/* <ReactHooks /> */}
      {/* <UseRef /> */}
        <UseMemo />
    </>
  )
}

export default App
