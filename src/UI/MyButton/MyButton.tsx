import React from "react"
import MybuttonCss from "./Mybutton.module.css"
import {MyButtonInterface} from "../../@TS-TYPES/ComponentInterfaces";




const MyButton = function ({children,classList,...props }:MyButtonInterface) {



    return(
        <div>
            <button className={!classList? MybuttonCss.mybtn:classList} type = "submit"  {...props} >
                 {children}
             </button>
        </div>
    )


}


export default MyButton
