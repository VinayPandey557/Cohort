import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


let counter = 4;
function App() {
const [todos, setTodos] = useState([{
    id: 1,
    title:"got to gym",
    description: "Go to gym today",
  },
  {
  id: 2,
  title:"got to college",
  description: "Go to collge today",
  }, {
  id: 3,
  title:"got to play cricket",
  description: "Go to ground today",
  }])


  function addTodo() {
       setTodos([...todos, {
        id: counter++,
        title: Math.random(),
        description: Math.random()
       }])
  }

return <div> 
  <button onClick={addTodo}>Add a todo</button>
  {todos.map(todo => <Todo key={todo.id}  title={todo.title} description={todo.description}></Todo>)}
  </div>
}

function Todo({title, description}){
   return <div>
    <h1>{title}</h1>
    <h4>
      {description}
    </h4>
   </div>
}



export default App
