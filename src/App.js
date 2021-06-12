import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import useFetchHook from './customStates/useFetchHook';
import useForm from './customStates/useForm';
import Hooks2 from './Hooks2';
function myReducer(state, action){
  switch(action.type){
    case "increment": return state + 1;
    case "decrement": return state - 1;
    default: return state;
  }
}
function App() {
  
  const [values, handleChange] = useForm({username:"", password:""})
  function onmousemove(e){
    console.log(e)
  }
  const [count, setCount] = useState(0)
 const {data, isLoading}  = useFetchHook(`http://numbersapi.com/${count}/trivia`)
 const inputRef = useRef();
  // useEffect(() =>{
  //   window.addEventListener('mousemove', onmousemove);
  //   return ()=>{
  //     // cleans up values.username, remember this is the dependency.
  //     window.removeEventListener('mousemove',onmousemove)
  //     console.log('mousemove removed')
  //   }
  // },[values.username])//triggered on a given change
  function handleSubmit(){
    console.log(values);
    console.log(inputRef.current.focus())
  }
  const [incre, setIncre] = useState(0)
  const increment = useCallback((n)=>{
    setIncre(i => i+n)
  },[setIncre])

  const [cntValue, dispatch] = useReducer(myReducer,0)
  return (
    <form>
      <div>{isLoading ? '.... loading ' : data }</div><br/>
      <input type="button" value='Fetch new' onClick={() =>setCount(c =>  c+1)}/><br/><br/>
      <input type="text" ref={inputRef} name ="username" value={values.username} onChange={handleChange}/>
      <input type="text" name ="password" value={values.password} onChange={handleChange}/>
      <input type="button" value="print" onClick={handleSubmit}/>


      <Hooks2 increment = {increment}/>
      <div>Increasing {incre}</div>
      <br/><br/>
      <p>Reducer hook</p>
      <div>{cntValue}</div>
      <input type="button" value="increment" onClick={()=>dispatch({type:'increment'})}/>
      <input type="button" value="decrement" onClick={()=>dispatch({type:'decrement'})}/>
    </form>
  );
}

export default App;
