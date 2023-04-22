import { useState } from "react";
import ReactDOM from "react-dom/client";

function Car() {
  const [car, setCar] = useState({
    brand:"Food",
    Model:"Mustang",
    year:"1964",
    color:"red"

});
const updateColor = ()=>{
    setCar(prviousState =>{
        return{...prviousState,color:"blue"}
    });
}
  return (
    <>
      <h1> My {car.brand}!</h1>
      <p>  It is {car.color} {car.Model} from {car.year}.</p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
  )
}

export default Car;