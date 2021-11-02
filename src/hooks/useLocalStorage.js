import React from 'react';


function useLocalStorage(itemName, initialValue){

    const [loading, setLoading] = React.useState(true);
    const [item, setItems] = React.useState(initialValue);
    

    React.useEffect(() =>{
        setTimeout(()=>{
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
                setLoading(false);
                
                
                
            }catch(err){
                console.log(err);
            }
        },3000);
        
        

        
        
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
        loading
    }
}


export default useLocalStorage;