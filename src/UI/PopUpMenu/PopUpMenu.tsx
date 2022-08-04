import React from "react";
import cl from './PopUpMenu.module.css';

const PopUpMenu = ({children, visible, setVisible, classList}:{children:any, visible:any, setVisible:any, classList?:string}) => {

    const rootClasses = [cl.droplist]

    if (visible) {
        rootClasses.push(cl.active);
        if(classList){
            rootClasses.push(classList);
        }
    }

    return (
        <div className={rootClasses.join(' ') } onMouseOut={() => setVisible(false)}>
            {children}
        </div>
    );
};


export default PopUpMenu
