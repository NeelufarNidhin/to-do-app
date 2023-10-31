import React, {useState} from 'react'

function MainContent() {
    const [todoList,setTodoList] = useState([]) //to store list of todos
    const [todo,setTodo] = useState('') //to store the onchange value of input field
   
   function deleteTodo(id){
    setTodoList(currentTodo =>{
        return currentTodo.filter(todo => todo.id !== id) // we are filtering all values other than the delete
    })
   }
 function handleSubmit (e) {
        e.preventDefault()
        if(todo === "") return;
        const existingtodo = todoList.find(value => value.todo === todo);
        if(existingtodo) {
            return}

        else{ setTodoList( [...todoList,{ id: Date.now(),text:todo ,completed:false}])
        }
       
  }

   
  return (
    <div className='main-content'>
        <form  onSubmit={handleSubmit}>
      <input className='input' type='text' value={todo} onChange={(e) => setTodo(e.target.value) } />
      
      <button className='btn' >Add</button>
      </form>
      <h1>To-do List</h1>
      <ul>
        {/* {todo.length === 0 && "No todos"} */}

       { todoList.map((val) => {
            return(
                <li className='todo-list' key={val.id}>
                <label style= {{textDecoration : val.completed && "line-through",marginRight:"20px"}}>
                <input onChange={(e) =>{
                    setTodoList(todoList.filter(obj=>{
                        if(obj.id === val.id){
                            val.completed = e.target.checked
                        }
                        return obj
                    }))
                }}   value={val.completed} type='checkbox'/>
                 {val.text}
                </label>
                <button className='btn-danger' onClick={() => deleteTodo(val.id ,val.completed)}>delete</button>
                </li>
            )
        })   
    }
    </ul>
    </div>
  )
}

export default MainContent
