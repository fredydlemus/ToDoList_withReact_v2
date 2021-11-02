import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const initialState = false;

const useTodoState = () => {

    const{
        item,
        saveItems,
    } = useLocalStorage('TODOS_V1', []);

  
    
    const [openModal, setOpenModal] = React.useState(initialState);
    
    const finishedTodos = item.filter(todo => !!todo.completed).length;
    const totalTodos = item.length;


    const modifyModal = () =>{
        setOpenModal(openModal => !openModal);
    }

    const addTodo = (text) =>{

        let newId;

        if(item.length === 0){
            newId = 1;
        }else{
            newId = item[item.length - 1].id + 1;
        }
        
        console.log(newId);
        const newTodos = [...item];
        newTodos.push({
            completed: false,
            text,
            id: newId
            
    }
    
        )
        
        saveItems(newTodos);
        
    }

    const completeTodo = (id) =>{
        
        const itemComplete = item.findIndex(item => item.id === id);
        const newTodos = [...item];
        newTodos[itemComplete].completed = true;
               

        saveItems(newTodos);
        
    }
    
    const deleteTodo = (id) =>{
        const itemDelete = item.findIndex(item => item.id === id);
        const newTodos = [...item];
        newTodos.splice(itemDelete, 1);

        saveItems(newTodos);
    }
    return {
        openModal,
        modifyModal,
        addTodo,
        item,
        completeTodo,
        deleteTodo,
        finishedTodos,
        totalTodos
    }
}

export default useTodoState;

