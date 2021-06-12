import { useEffect, useState } from "react"

function useFetchHook(url){
    const [state, setState] = useState({data:"", isLoading:false})
    useEffect( ()=>{
        setState(s => ({data:"", isLoading : true}))
       fetch(url).then(async (val) => {
           var result = await val.text();
           setState({data:result, isLoading : false})
       })
    },[url, setState])

    return state
}
export default useFetchHook