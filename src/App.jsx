import React from 'react'
import Layout from './containers/Layout';
import AppContext from './context/AppContext';
import useTodosStates from './hooks/useTodoStates';

import './styles/global.scss';

const App = () =>{
    
    const todosStates = useTodosStates();
   

    return(
        <AppContext.Provider value= {todosStates}>
            
            <Layout/>
           
            
        </AppContext.Provider>
        
    );
}

export default App;