import React from 'react'
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import ToDoBoard from './ToDoBoard';
import ToDoModal from '../components/ToDoModal';
import ToDoSearch from '../components/ToDoSearch';
import Menu from '../components/Menu';


const Layout = () =>{

   
    const {openModal} = React.useContext(AppContext);    

    return(
        
            <div className='Layout'>
                <Header />
                <ToDoSearch />
                <ToDoBoard />
                {!!openModal &&(
                    <ToDoModal />
                )}
                <Menu />
            </div>
        
        
    );
}

export default Layout;