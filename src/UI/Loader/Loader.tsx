import React from "react";
import LoaderCss from "./Loader.module.css"
const Loader =({isPostLoading}: any)=> {

    const rootClasses = []

     if(isPostLoading){
        rootClasses.push(LoaderCss.ring);
     }else{
        rootClasses.length = 0
     }



    return(


        <div className = {rootClasses.join(' ')}>Loading
        <span> </span>
        </div>



    )


};


export default Loader
