import { useState } from 'react';
import './TodoApp.css';
const TodoApp = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [todos, setTodos] = useState<string[]>([]);
    const [editIndex,setEditIndex] = useState<number | null>(null);
    function addTodo() {
        if(editIndex !== null){
            console.log('editing todo at index:', editIndex);
            const updated = [...todos];
            updated[editIndex] = inputValue;
            setTodos(updated);
            setEditIndex(null);
            setInputValue('');
        }else{
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    }

    function editTodo(index:number) {
        setInputValue(todos[index])
        setEditIndex(index);
    }

    function deleteTodo(index: number) {
        const updated = todos.filter((_, i)=> i !== index);
        setTodos(updated);
    }

    return (
        <div>
            <h1>Todo App</h1>
            {/* Todo App implementation will go here */}
            <div className='container'>
                <div className='inner-div'>
                    <input type="text" name="todo" value={inputValue} onChange={(e) => setInputValue(e.target.value)} id="todo" />
                    <button onClick={addTodo}>Add Todo</button>
                </div>
                <div className='todo-list'>
                    <ul>
                        {todos.map((todo, index) => {
                            return (
                                <div className='list-todo'>
                                    <div>
                                        <li key={index}>{todo}</li>
                                    </div>
                                    <div>
                                        <button onClick={()=>editTodo(index)}>Edit</button>
                                        <button onClick={()=>deleteTodo(index)}>Delete</button>
                                    </div>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TodoApp