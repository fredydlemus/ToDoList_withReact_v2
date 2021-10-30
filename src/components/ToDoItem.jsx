import React from 'react'
import '../styles/ToDoItem.scss';
import {AiFillCheckCircle, AiFillCloseCircle} from 'react-icons/ai';

const ToDoItem = (props) =>{
    return(

        <li className={`ToDoItem ${props.completed && 'ToDoItem-complete'}`}>
            <div className='ToDoItem-description'>
                <p>{props.text}</p>
            </div>
            <div className='ToDoItem-buttons'>
                <AiFillCloseCircle
                    className='button'
                    size='28px'
                    color='red' />
                
                <AiFillCheckCircle 
                    className='button'
                    size='28px'
                    color={`${!props.completed? 'green' : 'gray'}`}
                />
            </div>
            
            
            
        </li>
    );
}

export default ToDoItem;