import React from 'react';


function useLocalStorage(itemName, initialValue){

    const [item, setItems] = React.useState(initialValue);

    React.useEffect(() =>{
        
        try{
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;

            if(!localStorageItem){
                
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedItem = initialValue;
            }else{
                
                parsedItem = JSON.parse(localStorageItem);
                
            }


            
            setItems(parsedItem);
            
            
            
        }catch(err){
            console.log(err);
        }

        
        
    }, []);

    // console.log('the item contains:', item);

    const saveItems = (newItems) =>{
        try{
            
            const stringifiedTodos = JSON.stringify(newItems);
            localStorage.setItem(itemName, stringifiedTodos);
            
            setItems(newItems);
            
        }catch(err){
            console.error(err);
        }
    }

    

    return{
        item,
        saveItems,
    }
}


export default useLocalStorage;