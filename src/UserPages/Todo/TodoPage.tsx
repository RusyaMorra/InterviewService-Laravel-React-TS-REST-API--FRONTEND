//imports
import React,{FC, useEffect} from "react";
import Context from "../../Context/context";
import Todolist from "./webComponentsTodo/Todolist";
import Loader from "../../UI/Loadertodo/Loader";
import Modal from "./UI-Todo/Modal/Modal";
import {ToDoInterface} from "../../@TS-TYPES/ComponentTypes";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {TodoActionTypes} from "../../@TS-TYPES/ReduxTypes/Todo/ReduxTodoInterfaces";
import { useDispatch } from "react-redux";

const AddTodo: React.LazyExoticComponent<React.ComponentType<any>> = React.lazy(() =>  new Promise(resolve => {
    setTimeout(()=>{
      resolve(import('./webComponentsTodo/AddTodos'));
    },3000)
}))





const TodoPage: FC =() =>{

    const {error, loading, todos} = useTypedSelector(state => state.todo);
    const {fetchTodos} = useActions();
    const dispatch = useDispatch();

   

    useEffect(()=>{
        fetchTodos();
    },[])





    function toggleTodo(id:number){
        const toggledTodo =  todos.map((todo):ToDoInterface=>{
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo
        })
        dispatch({type: TodoActionTypes.FETCH_TODOS});
        dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: toggledTodo});
     
        
    }


    function removeTodo(id:number){
       const removedTodo  = todos.filter((todo:any)=> todo.id !== id);
       dispatch({type: TodoActionTypes.FETCH_TODOS});
       dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: removedTodo });

    }



    function addTodo(title:string){
        const TodoGenerate: ToDoInterface[] =  [{ title, id:  Date.now(), completed: false}];
        const addedTodo = todos.concat(TodoGenerate);
        dispatch({type: TodoActionTypes.FETCH_TODOS});
       dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: addedTodo});

    }

    

  return <Context.Provider value={{removeTodo}}>
            <div  className='wrapper'>
                <h1>ToDoo</h1>
                <Modal/>
                <React.Suspense fallback={<p>Loading...</p>} >
                    <AddTodo   onCreate={addTodo}/>
                </React.Suspense>

                {loading && <Loader/>}
                {error &&  error}
                {todos.length?(<Todolist todos={todos} onToggle={toggleTodo}/>):loading?null:(<p>No todos</p>)}
            </div>
        </Context.Provider>
}

export default TodoPage;
