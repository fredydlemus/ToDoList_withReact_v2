import React from 'react'
import AppContext from '../context/AppContext';
import '../styles/CreateNewTodo.scss';


const CreateNewTodo = (props) =>{

    const {modifyModal} = React.useContext(AppContext);
    

    const handleButton = () =>{
        modifyModal();
    }

    return(
        <section className='CreateNewTodo'>
            
            <button
                onClick = {handleButton}
            >+</button>
        </section>
    );
}

export default CreateNewTodo;