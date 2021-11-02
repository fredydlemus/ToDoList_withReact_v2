import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const initialState = false;

const useTodoState = () => {

    const{
        item,
        saveItems,
    } = useLocalStorage('TODOS_V1', []);

  
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(initialState);
    
    const finishedTodos = item.filter(todo => !!todo.completed).length;
    const totalTodos = item.length;
    let searchedTodos = [];

    if(!searchValue.length >= 1){
        searchedTodos = item;
    }else{
        searchedTodos = item.filter(todo =>{
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });
    }

    


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
        totalTodos,
        searchedTodos,
        setSearchValue
    }
}

export default useTodoState;

