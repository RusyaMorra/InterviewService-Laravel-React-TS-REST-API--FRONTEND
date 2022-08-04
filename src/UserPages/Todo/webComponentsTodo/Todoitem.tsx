import {useContext} from "react";
import Context from "../../../Context/context";

const styles ={
    li:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding: '.7rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem',
        backgroundColor:'white'
    },
    button:{
        marginLeft: '100px',
    },
    input:{

        marginRight: '15px',
    }

}

function  TodoItem({todo,index,onChange}:{todo:any,index:any,onChange:any}){
    const {removeTodo}: any = useContext(Context)
    const  classes = []
    if(todo.completed){
        classes.push('done')
    }

    return (

        <li style={styles.li}>
            <span  className={classes.join('')}>
                <input style={styles.input} checked={todo.completed} type="checkbox" onChange={()=>onChange(todo.id)} />


            <strong>{index+1}</strong> &nbsp; {todo.title}

            </span>
            <button className="gg" onClick={removeTodo.bind(null,todo.id)} style={styles.button}>&times;</button>
        </li>
    )



}



export default  TodoItem
