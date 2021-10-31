import React from 'react';
import { getTodos } from './List';

const initialState = false;

const useModalState = () => {
    const [openModal, setOpenModal] = React.useState(initialState);
    const [listTodos, setListTOdos] = React.useState(getTodos());
    const todo = listTodos;

    const modifyModal = () =>{
        setOpenModal(openModal => !openModal);
    }

    const addTodo = (text) =>{
        todo.push({
            completed: false,
            text,
    }
    
        )
        setListTOdos(todo);
        
    }
    

    return {
        openModal,
        modifyModal,
        addTodo,
        listTodos,
    }
}

export default useModalState;

