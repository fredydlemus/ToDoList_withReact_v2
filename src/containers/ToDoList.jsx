import React from 'react'
import ToDoItem from '../components/ToDoItem';
import '../styles/ToDoList.scss';
import AppContext from '../context/AppContext';
import CreateNewTodo from '../components/CreateNewTodo';




const ToDoList = () =>{

    const {searchedTodos, totalTodos} = React.useContext(AppContext);
    
    const todos = searchedTodos;
    

    return(
        <section className='ToDoList'>
            {!totalTodos ? 
                <div className="ToDoList-empty">
                    <p>Create your first ToDo</p>
                    <CreateNewTodo />
                </div> : 
                <ul>
                    {todos.map(todo => (
                    <ToDoItem 
                        key = {todo.id}
                        id={todo.id}
                        text = {todo.text}
                        completed = {todo.completed}
                    />
                ))}    
                </ul>}
            
        </section>
    );
}

export default ToDoList;