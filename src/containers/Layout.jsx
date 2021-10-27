import React from 'react'
import Header from '../components/Header';
import ToDoList from './ToDoList';

const Layout = () =>{
    return(
        <div className='Layout'>
            <Header />
            <ToDoList />
        </div>
    );
}

export default Layout;