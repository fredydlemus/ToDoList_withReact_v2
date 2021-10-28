import React from 'react'
import Header from '../components/Header';
import ToDoBoard from './ToDoBoard';


const Layout = () =>{
    return(
        <div className='Layout'>
            <Header />
            <ToDoBoard />
        </div>
    );
}

export default Layout;