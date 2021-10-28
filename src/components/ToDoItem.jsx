import React from 'react'
import '../styles/ToDoItem.scss';

const ToDoItem = () =>{
    return(

        <li className='ToDoItem'>
            <div className='ToDoItem-description'>
                <p>Ayudar a mi mama</p>
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