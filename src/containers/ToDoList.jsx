import React from 'react'
import ToDoItem from '../components/ToDoItem';
import '../styles/ToDoList.scss';
import AppContext from '../context/AppContext';




const ToDoList = () =>{

    const {item} = React.useContext(AppContext);
    const todos = item;
    console.log(todos);

    return(
        <section className='ToDoList'>
            <ul>
                {todos.map(todo => (
                    <ToDoItem 
                        key = {todo.id}
                        text = {todo.text}
                        completed = {todo.completed}
                    />
                ))}
            </ul>
        </section>
    );
}

export default ToDoList;