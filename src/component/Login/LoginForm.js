import React, { Component, useState } from 'react';
const LoginForm = () =>{
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
    const{handleSubmit} = this.props;
    return(
        // const{handleSubmit} = this.props;
        <div>
            <head className='App-header'>
                <form onSubmit={handleSubmit}>
                    <input value={email} onChange={(e)  => setEmail(e.target.value)}/>
                    <input value={pass} onChange={(e)  => setPass(e.target.value)}/>

                    <button type='submit'>Submit</button>
                </form>
            </head>
        </div>
    )
}
}
export default LoginForm;