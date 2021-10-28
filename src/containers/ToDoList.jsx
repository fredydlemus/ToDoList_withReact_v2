import React from 'react'
import ToDoItem from '../components/ToDoItem';
import '../styles/ToDoList.scss';

const ToDoList = () =>{
    return(
        <section className='ToDoList'>
            <ul>
                <ToDoItem />
            </ul>
        </section>
    );
}

export default ToDoList;