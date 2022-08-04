import React, {useState} from "react";



function useInputValue(defaultValue=''){

    const [value,setValue] = useState(defaultValue)

    return{
        bind:{
            value,
            onChange: (event: { target: { value: React.SetStateAction<string> } }) => setValue(event.target.value)
        },

        clear:()=>setValue(''),

        value:()=>value
    }
}






function AddTodo({onCreate}:{onCreate:any}){

    const input = useInputValue('')

    function submitHandler(event:any){
      event.preventDefault()
        if(input.value().trim()){
            onCreate(input.value())
            input.clear()

        }

    }


    return (
         <form style={{marginBottom:'1rem'}} onSubmit={submitHandler}>
            <input {...input.bind} />
            <button className='btn11'  type='submit'>Add todo</button>
        </form>
    )
}



export  default AddTodo


