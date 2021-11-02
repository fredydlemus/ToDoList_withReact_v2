import React from 'react'
import ToDoCounter from '../components/ToDoCounter';
import AppContext from '../context/AppContext';
import ToDoLoading from '../components/ToDoLoading'
import '../styles/ToDoBoard.scss'
import ToDoList from './ToDoList';

const ToDoBoard = () =>{

    const{loading} = React.useContext(AppContext);

    return(
        <section className='ToDoBoard'>
            {loading ?
                <section className='Loading'>
                    <ToDoLoading />
                    <ToDoLoading />
                    <ToDoLoading />
                </section> : 
                <section>
                    <ToDoCounter />
                    <ToDoList />
                </section>
            }
            
            
            
        </section>
    );
}

export default ToDoBoard;