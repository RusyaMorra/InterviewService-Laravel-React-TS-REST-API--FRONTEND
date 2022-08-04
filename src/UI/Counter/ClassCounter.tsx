import { object } from "prop-types";
import React from "react";


class ClassCounter extends React.Component<{}, {count:number}, any>{
    constructor(props:any){
        super(props)

        this.state = {count: 0}

        this.increment = this.increment.bind(this);
        this.dicrement = this.dicrement.bind(this);


    }


    increment(){
        this.setState({count:this.state.count+5})
    }

    dicrement(){
        this.setState({count:this.state.count-5})

    }


    render(){
        return (
            <div>
                <div>{this.state.count}</div>
                <button onClick = {this.increment}>increment</button>
                <button onClick = {this.dicrement}> decrement</button>
            </div>
        )
    }
}

export default ClassCounter
