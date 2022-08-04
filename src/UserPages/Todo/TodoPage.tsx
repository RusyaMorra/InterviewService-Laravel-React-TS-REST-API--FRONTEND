//imports
import React,{FC, useEffect} from "react";
import Context from "../../Context/context";
import Todolist from "./webComponentsTodo/Todolist";
import Loader from "../../UI/Loadertodo/Loader";
import Modal from "./UI-Todo/Modal/Modal";
import {ToDoInterface} from "../../@TS-TYPES/ComponentInterfaces";

/*
*Линивая подгрузка компонентов
*/

const AddTodo: React.LazyExoticComponent<React.ComponentType<any>> = React.lazy(() =>  new Promise(resolve => {
    setTimeout(()=>{
      resolve(import('./webComponentsTodo/AddTodos'))
    },3000)
}))



/*
*Страница TodoPage
*/

const TodoPage: FC =() =>{

    const [todos,setTodos] = React.useState<ToDoInterface[]>([])
    const [loading,setLoading] = React.useState(true)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTimeout(()=>{
                    setTodos(todos)
                    setLoading(false)
                    }, 2000)
            })
    },[])





    function toggleTodo(id:number){
        setTodos(todos.map((todo):ToDoInterface=>{
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }


    function removeTodo(id:number){
       setTodos(todos.filter((todo:any)=> todo.id !== id))

    }



    function addTodo(title:string){
        const TodoGenerate: ToDoInterface[] =  [{ title, id:  Date.now(), completed: false}];
        setTodos(todos.concat(TodoGenerate));

    }

  return <Context.Provider value={{removeTodo}}>
            <div  className='wrapper'>
                <h1>ToDoo</h1>
                <Modal/>
                <React.Suspense fallback={<p>Loading...</p>} >
                    <AddTodo   onCreate={addTodo}/>
                </React.Suspense>

                {loading && <Loader/>}
                {todos.length?(<Todolist todos={todos} onToggle={toggleTodo}/>):loading?null:(<p>No todos</p>)}
            </div>
        </Context.Provider>
}

export default TodoPage;
