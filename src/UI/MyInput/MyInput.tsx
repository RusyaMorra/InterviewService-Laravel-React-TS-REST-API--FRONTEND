import React from "react";


const MyInput = React.forwardRef( (props:any,ref:any) => {

    return(
        <div>
           <input  ref = {ref} {...props}  type="text" placeholder = {props.title}/>

        </div>
    )


});


export default MyInput
