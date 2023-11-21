import React from "react";

function useLocalStorage(itemName, initialValue){
    const[error, setError] = React.useState(false);
    const[loading, setLoading] = React.useState(true);
    const[Listitem, setListItem] = React.useState(initialValue);
  
    React.useEffect(()=> {
      setTimeout(()=>{
        try{
          const localStorageListItem = localStorage.getItem(itemName);
          let parsedListItem;
          
          if(!localStorageListItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedListItem = initialValue;
          }else{
            parsedListItem = JSON.parse(localStorageListItem);
        
          }
          setListItem(parsedListItem);
          setLoading(false);
        } catch(error){
          setError(error);
  
        }
      },3000);
    });
  
    
  
    /// save ToDos
    const saveListItem = (newListItem) =>{
      try{
        const stringifyListItem = JSON.stringify(newListItem);
        localStorage.setItem(itemName, stringifyListItem);
        setListItem(newListItem);
      }catch(error){
        setError(error);
      }
    }
    return{
      Listitem,
      saveListItem,
      loading,
      error,
    };
  
  }

  export {useLocalStorage}