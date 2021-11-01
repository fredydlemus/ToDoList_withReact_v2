import React from 'react'
import ToDoItem from '../components/ToDoItem';
import '../styles/ToDoList.scss';
import AppContext from '../context/AppContext';




const ToDoList = () =>{

    const {item} = React.useContext(AppContext);
    const todo = item;
    

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