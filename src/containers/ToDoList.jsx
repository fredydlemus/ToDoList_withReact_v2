import React from 'react'
import ToDoItem from '../components/ToDoItem';
import '../styles/ToDoList.scss';
import {getTodos} from '../hooks/List';
import AppContext from '../context/AppContext';




const ToDoList = () =>{

    const {listTodos} = React.useContext(AppContext);
    const todo = listTodos;

    return(
        <section className='ToDoList'>
            <ul>
                {todo.map(item => (
                    <ToDoItem 
                        key = {item.text}
                        text = {item.text}
                        completed = {item.completed}
                    />
                ))}
            </ul>
        </section>
    );
}

export default ToDoList;