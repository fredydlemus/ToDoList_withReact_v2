import React from 'react'
import '../styles/ToDoItem.scss';

const ToDoItem = (props) =>{
    return(

        <li className={`ToDoItem ${props.completed && 'ToDoItem-complete'}`}>
            <div className='ToDoItem-description'>
                <p>{props.text}</p>
            </div>
            <div className='ToDoItem-buttons'>
                
                <span>
                    <div>X</div>
                </span>
                
                <span>
                    <div>ᄼ</div>
                </span>
            </div>
            
            
            
        </li>
    );
}

export default ToDoItem;