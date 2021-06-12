import React, { useRef, useState } from "react";


const Hooks2 = React.memo(({increment}) =>{
  // const[count, setCount] = useState(0)
    const ref = useRef(0)
    console.log("use ref => ",ref.current++);
    return(
        <>
        <br/><br/><br/>
            <div>Hook 2</div>
            <input type='button' value='click me' onClick={()=>increment(3)}/>
        </> 
    )
    
})

export default Hooks2;