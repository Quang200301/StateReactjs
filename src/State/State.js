import React, { Component } from 'react';
import { getData } from '../Data/Data';
class State extends Component {
    constructor(props) {
       
        super(props);
        this.state = ({
            arr: getData(),
            products: []
        })
    }

    componentDidMount(){
        this.productHome()
    }

    productHome = () => {
        const arr = getData()
        this.setState({
            products: this.state.arr
                // .filter((item) => item.loai === "Giay")
                .map((item) => ({
                   image: item.image,
                   name: item.name,
                   loai: item.loai,
                   gia: item.gia
                }
                   
                        
                   
                ))
        })
    }
    
    
    productgiay = () =>{
        this.setState({
            products:this.state.arr
            .filter((item)=>item.loai==="Giay")
            .map((item) => ({
                image: item.image,
                name: item.name,
                loai: item.loai,
                gia: item.gia
             }
            ))
        })
    }
    
    productAo = () =>{
        this.setState({
            products:this.state.arr
            .filter((item)=>item.loai==="Ao")
            .map((item) => ({
                image: item.image,
                name: item.name,
                loai: item.loai,
                gia: item.gia
             }
            ))
        })
    }

    productQuan = () =>{
        this.setState({
            products:this.state.arr
            .filter((item)=>item.loai==="Quan")
            .map((item) => ({
                image: item.image,
                name: item.name,
                loai: item.loai,
                gia: item.gia
             }
            ))
        })
    }

    productVong = () =>{
        this.setState({
            products:this.state.arr
            .filter((item)=>item.loai==="Trangsuc")
            .map((item) => ({
                image: item.image,
                name: item.name,
                loai: item.loai,
                gia: item.gia
             }
            ))
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.productHome}>Home</button>
                <button onClick={this.productgiay}>Giày</button>
                <button onClick={this.productAo}>Áo</button>
                <button onClick={this.productQuan}>Quần</button>
                <button onClick={this.productVong}>Vòng</button>
                <div className='content'>
                {this.state.products.map((item) => ( 
                    <div>
                        <img src={item.image}></img>
                        <h1>{item.name}</h1>
                        <p>{item.gia}</p>
                    </div>
                ))}
                </div>
               
            </div>
        )
    }

}

export default State;

// ------------------------------------------
















//     constructor(props){
//         var arr= getData();
//         super(props);
//         this.state = {
//             arr
//         }
//     }

// render() {
//     return (

// <div className='row'>{

//     this.state.arr.map(
//     key =>

//     <div className="card" style={{width: '18rem'}}>

//     <img src={key.image} className="card-img-top" alt="..." />
//     <div className="card-body">
//       <h5 className="card-title">{key.name}</h5>
//       <p className="card-text">{key.loai}</p>
//       <a href="#" className="btn btn-primary">{key.gia}</a>
//     </div>
//   </div>


/* <img src={key.image} />
<p> {key.name}</p> 
<p> {key.loai}</p> */


//                 )
//                 }

//             </div>
//         );
//     }
// }




