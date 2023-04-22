import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './Header/Header';
import State from './State/State';
import BT from './BT/BT';
import CB from './component/hooks/hooks';
import CLASSHOOKS from './component/hooks/classhooks';
import HOOKSCOUNT from './component/hooks/classhooks';
import Showimage from './component/Color/Showimage';
import LoginForm from './component/Login/LoginForm';
import Cacolor from './component/carcolor/Cacolor';
import Form from './component/form/Form';
function App() {
  return (
    <div className="App">
        {/* <Header/> */}
        {/* <State /> */}
        {/* <BT/> */}
        {/* <CB /> */}
        {/* <HOOKSCOUNT /> */}
        {/* <Showimage /> */}
        {/* <LoginForm /> */}
        {/* < Car /> */}
        <Form/>
    </div>
  );
}

export default App;
