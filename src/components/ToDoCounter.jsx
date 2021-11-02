import React from 'react'
import AppContext from '../context/AppContext';
import '../styles/ToDoCounter.scss'

const ToDoCounter = () =>{

    const {totalTodos, finishedTodos} = React.useContext(AppContext);

    return(
        <div className='ToDoCounter'>
            <h3>You have completed {finishedTodos} of {totalTodos} ToDo's</h3>
        </div>
    );
}

export default ToDoCounter;