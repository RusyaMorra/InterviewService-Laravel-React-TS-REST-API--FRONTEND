import TodoItem from "./Todoitem";


const styles ={
    ul:{
        listStyle:'none',
        margin: 0,
        padding:0,
    }

}


  function  Todolist(props:any){
   return (
       <ul style={styles.ul}>
           {props.todos.map((todo:any,index:any)=>{
               return <TodoItem
                   todo={todo}
                   key={todo.id}
                   index={index}
                   onChange={props.onToggle}
               />
           })}


       </ul>
   )


}

export default Todolist
