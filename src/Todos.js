import React, {useState} from 'react';

const Todos = () => {
    const [todos, setTodos] = useState(["Drink a coffee", "Go to school"])
    const [task, setTask] = useState("")
    const addTodo = () => {
        if (task.length >= 4){
            setTodos([...todos, task])
            setTask("")
        }
        else{
            setTask("Введите более 3-х символов")
        }
    }
    const deleteLastTodo = () => {
      setTodos(todos.slice(0, -1))
    }
    const input = (e) => {
        setTask(e.target.value )
    }
    return (
        <div>
            <h1>Todos</h1>
            <input type="text" onChange={input} value={task} />
            <button onClick={addTodo}>Новое дело</button>
            <button onClick={deleteLastTodo}>Удалить последний</button>
            <ul>
            {
                todos.map((el, idx)=> (
                    <li>{el}</li>
                ))
            }
            </ul>
        </div>
    )
}

export default Todos;