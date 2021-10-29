// import React from 'react';

// function useLocalStorage(itemName, initialValue){
//     const[item, setItem] = React.useState(initialValue);

//     React.useEffect(() =>{
//         setTimeout(() =>{
//             try{
//                 const localStorageItem = localStorage.getItem(itemName);
//                 let parsedItem;

//                 if(!localStorageItem){
//                     localStorage.setItem(itemName, JSON.stringify(initialValue));
//                 }
//             }catch(){}
//         }, 3000);
//     });
// }

