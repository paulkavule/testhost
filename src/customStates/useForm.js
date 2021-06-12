import {useState} from 'react'

const useForm = (initiValues) =>{
    const [values, setValues] = useState(initiValues)

    return  [values, e =>{
        setValues({...values, [e.target.name] : e.target.value    })
    }]
}

export default useForm;