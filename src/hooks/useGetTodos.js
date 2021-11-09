
import {useEffect, useState} from 'react';


const useGetTodos = (API) =>{
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch(API)
        .then(response => response.json())
        .then(response => setTodos(response));
        
    }, []);
    return todos;
}

export default useGetTodos;