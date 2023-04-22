import React, { Component } from 'react';
import { getData } from '../Data/Data';
class BT extends Component {
    constructor(props){
        super(props);
        this.state = ({
            arr:getData(),
            products:[]
        })
    }
    
    componentDidMount(){
        this.productsHome()
    }
    productsHome = () =>{
        const arr = getData()
        this.setState ({
            producs:this.state.arr
            .map((item)=>({
                image:item.image,
                name:item.name,
                loai:item.loai,
                gia:item.gia
            }
            )
        )
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.productsHome}>Home</button>
                <div>
                {this.state.products.map((item) => ( 
                    <div>
                        <img src={this.props.image}></img>
                        <h1>{item.name}</h1>
                        <p>{item.gia}</p>
                    </div>
                ))}
                </div>
            </div>
        );
    }
}

export default BT;