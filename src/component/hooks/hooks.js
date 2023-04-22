import { useState } from "react";

function CB(){
    const [count,setcount]=useState(0);

    return (
        <div>
        <h1>{count}</h1>
        <button onClick={()=>setcount(count +1)}>Countup</button>
        </div>
    )
}
export default CB;
