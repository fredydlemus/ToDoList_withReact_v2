import React from 'react'
import CreateNewTodo from '../components/CreateNewTodo';
import ToDoCounter from '../components/ToDoCounter';
import '../styles/ToDoBoard.scss'
import ToDoList from './ToDoList';

const ToDoBoard = () =>{
    return(
        <section className='ToDoBoard'>
            <ToDoCounter />
            <ToDoList />
            <CreateNewTodo />
        </section>
    );
}

export default ToDoBoard;