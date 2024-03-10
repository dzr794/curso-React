import { useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";

const initialState = [
  {
    id: new Date().getTime(),
    description: 'comer algo rico',
    done: false,
  },
  {
    id: new Date().getTime()*3,
    description: 'barrer',
    done: false,
  },
]

export const TodoApp = () => {

  const [ todos, dispatch ] = useReducer( todoReducer , initialState);

  const handleNewTodo = ({todo}) => {
    console.log({todo});
  }

  return (
    <>
      <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          
          <TodoList todos={todos}/>

        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />

          {/* TodoAdd onNewTodo( todo ) */}
          {/* 
          {
            id: new Date().getTime()*3,
            description: '',
            done: false,
          },
          */}
          <TodoForm />
          {/* fin AddTodo */}
        </div>
      </div>

      
    </>
  )
}
