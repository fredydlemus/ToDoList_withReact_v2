import React from 'react'
import ToDoItem from '../components/ToDoItem';
import '../styles/ToDoList.scss';


const todo = [
    {
        text: 'ayudar a mi mama',
        completed: false
    },
    {
        text: 'Hacer la cama',
        completed: false
    },
    {
        text: 'Buscar trabajo',
        completed: false
    },
    {
        text: 'hacer dieta',
        completed: true
    }
];

const ToDoList = () =>{
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