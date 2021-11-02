import React from 'react'
import '../styles/ToDoItem.scss';
import {AiFillCheckCircle, AiFillCloseCircle} from 'react-icons/ai';
import AppContext from '../context/AppContext';

const ToDoItem = (props) =>{

    const{completeTodo, deleteTodo} = React.useContext(AppContext);

    const completedTodo = () =>{
        
        completeTodo(props.id);
    }

    const deletedTodo = () =>{
        deleteTodo(props.id);
    }

    return(

        <li className={`ToDoItem ${props.completed && 'ToDoItem-complete'}`}>
            <div className='ToDoItem-description'>
                <p>{props.text}</p>
            </div>
            <div className='ToDoItem-buttons'>
                <AiFillCloseCircle
                    className='button'
                    size='28px'
                    color='red'
                    onClick = {deletedTodo} />
                
                <AiFillCheckCircle 
                    className='button'
                    size='28px'
                    color={`${!props.completed? 'green' : 'gray'}`}
                    onClick={completedTodo}
                />
            </div>
            
            
            
        </li>
    );
}

export default ToDoItem;