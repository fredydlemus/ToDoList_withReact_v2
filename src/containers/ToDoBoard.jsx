import React from 'react'
import ToDoCounter from '../components/ToDoCounter';
import '../styles/ToDoBoard.scss'
import ToDoList from './ToDoList';

const ToDoBoard = () =>{
    return(
        <section className='ToDoBoard'>
            <ToDoCounter />
            <ToDoList />
            
        </section>
    );
}

export default ToDoBoard;