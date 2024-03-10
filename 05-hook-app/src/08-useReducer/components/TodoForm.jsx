import { useRef } from "react";


export const TodoForm = () => {

  const inputDescription = useRef()


  const onNewTodo = (e) => {
    e.preventDefault();
    const todoDescription = inputDescription.current.value;
    if (todoDescription.length < 3) {
      return;
    }
    
    const newTodo = {
      id: new Date().getTime(),
      description: todoDescription,
      done: false,
    }

    console.log(newTodo);
    
  }

  return (
    
    <form onSubmit={onNewTodo}>
      <input 
        ref={inputDescription}
        type="text" 
        placeholder="¿Qué hay que hacer?"
        className="form-control"
      />

      <button
        type="submit"
        className="btn btn-outline-primary mt-1"
        
        >
        Agregar
      </button>
        
    </form>

  )
}
