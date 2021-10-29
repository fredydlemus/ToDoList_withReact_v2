import React from 'react'
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import ToDoBoard from './ToDoBoard';
import ToDoModal from '../components/ToDoModal';


const Layout = () =>{

   
    const {openModal} = React.useContext(AppContext);    

    return(
        
            <div className='Layout'>
                <Header />
                <ToDoBoard />
                {!!openModal &&(
                    <ToDoModal />
                )}
            </div>
        
        
    );
}

export default Layout;