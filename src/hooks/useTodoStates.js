import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const initialState = false;

const useTodoState = () => {

    const{
        item,
        saveItems,
    } = useLocalStorage('TODOS_V1', []);

    
    
    const [openModal, setOpenModal] = React.useState(initialState);
    
    const modifyModal = () =>{
        setOpenModal(openModal => !openModal);
    }

    const addTodo = (text) =>{
        item.push({
            completed: false,
            text,
    }
    
        )
        
        saveItems(item);
        
    }
    

    return {
        openModal,
        modifyModal,
        addTodo,
        item,
    }
}

export default useTodoState;

