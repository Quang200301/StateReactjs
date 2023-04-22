import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import State from './State/State';
import BT from './BT/BT';
import CB from './component/hooks/hooks';
import CLASSHOOKS from './component/hooks/classhooks';
import HOOKSCOUNT from './component/hooks/classhooks';
import Showimage from './component/Color/Showimage';
import LoginForm from './component/Login/LoginForm';

function App() {
  return (
    <div className="App">
        {/* <Header/> */}
        {/* <State /> */}
        {/* <BT/> */}
        {/* <CB /> */}
        {/* <HOOKSCOUNT /> */}
        <Showimage />
        {/* <LoginForm/> */}
    </div>
  );
}

export default App;
