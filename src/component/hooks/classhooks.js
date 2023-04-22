import React, { Component } from 'react';

class HOOKSCOUNT extends Component {
    state ={
        count :0
    };
    setCount = () =>{
        this.state({count:this.state.count +1 });
    };
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.setCount}> Count up</button>
            </div>
        );
    }
}

export default HOOKSCOUNT;