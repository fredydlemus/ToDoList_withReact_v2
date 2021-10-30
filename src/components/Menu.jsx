import React from 'react';
import CreateNewTodo from './CreateNewTodo';
import '../styles/Menu.scss'

const Menu = () =>{
    return(
        <ul className='Menu'>
            <li>
                <CreateNewTodo />
            </li>
        </ul>
    );
}

export default Menu;