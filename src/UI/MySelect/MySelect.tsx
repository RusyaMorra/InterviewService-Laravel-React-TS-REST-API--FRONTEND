import React from "react";

const MySelect =({options,defaultValue, value, onChange}:{options:any,defaultValue:any, value:any, onChange:any})=> {



    return(

        <select
        value={value}
        onChange={event => onChange(event.target.value)}
        >
        <option disabled value="">{defaultValue}</option>
        {options.map((option:any) =>
            <option key={option.value} value={option.value}>
                {option.name}
            </option>
        )}
        </select>


    )


};


export default MySelect
