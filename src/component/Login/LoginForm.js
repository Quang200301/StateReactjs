// import React, { Component, useState } from 'react';
// import LoginForm from './LoginForm';
// const LoginForm = () =>{
//     const [email,setEmail]=useState('');
//     const [pass,setPass]=useState('');
//     return(
//         const { handleSubmit } = this.props;
//         <div>
//             <h1>hello</h1>
//             <head className='App-header'>
//                 <form onSubmit={handleSubmit}>
//                     <input value={email} onChange={(e)  => setEmail(e.target.value)}/>
//                     <input value={pass} onChange={(e)  => setPass(e.target.value)}/>
//                     <button type='submit'>Submit</button>
//                 </form>
//             </head>
//         </div>
//     )

// }
// export default LoginForm;
import React, { useState } from 'react';

const LoginForm = ({ handleSubmit }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div>
    
      <header className='App-header'>
        <form onSubmit={handleSubmit}>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <input value={pass} onChange={(e) => setPass(e.target.value)} />
          <button type='submit'>Submit</button>
        </form>
      </header>
    </div>
  );
};

export default LoginForm;