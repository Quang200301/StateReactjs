import React, { Component } from 'react';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            isGoing:true,
            guestName:"bùi văn thỏ",
            course:'react.js',
            message:'your messange here '
           
        } ;             
    };
    handleInputChange = (event)=>{
        const target = event.target;
        const value=target.type ==='checkbox'?target.check:target.value;
        const name=target.name;

        this.setState({
            [name]:value
        });
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        alert('tham gia:'
        +this.state.isGoing+',họ tên:'
        +this.state.guestName+','
        +this.state.message
        );
        
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <lable>
                    Tham gia:

                    <input 
                    name="isGoing"
                    type="checkbox"
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}>
                    </input>
                </lable>
                <br/>
                <lable>
                    Ghi rõ họ tên:

                    <input 
                    name="guestName"
                    type="text"
                    checked={this.state.course}
                    onChange={this.handleInputChange}>
                    </input>
                </lable>
                <br/>
                <lable>
                    Chọn khóa học:
                    <select
                  
                    name="couse"
                    type="text"
                    checked={this.state.guestName}
                    onChange={this.handleInputChange}
                    >
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="javascript">JAVASCRIPT</option>
                    <option value="react.js">REACT.JS</option>
                    </select>
                </lable>
                <label>
                    Message:
                    <textarea
                    name="message"
                    type="text"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                    />
                </label>
                <br/>
                <input type="submit" value="Submit"/>
                
            </form>
            
        );
    };
  
}
export default Form;

