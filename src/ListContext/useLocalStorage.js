import React from "react";

function useLocalStorage(itemName, initialValue, factItemName, initialFactValue){
    const[error, setError] = React.useState(false);
    const[loading, setLoading] = React.useState(true);
    const[Listitem, setListItem] = React.useState(initialValue);
    const[Factitem, setFactItem] = React.useState(initialFactValue);
  
    React.useEffect(()=> {
      setTimeout(()=>{
        try{
          const localStorageListItem = localStorage.getItem(itemName);
          const localStorageFactItem = localStorage.getItem(factItemName);
          let parsedListItem;
          let parsedFactItem;
          
          if(!localStorageListItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedListItem = initialValue;
          }else{
            parsedListItem = JSON.parse(localStorageListItem);
        
          }
          if(!localStorageFactItem){
            localStorage.setItem(facrItemName, JSON.stringify(initialFactValue));
            parsedFactItem = initialFactValue;
          }else{
            parsedFactItem = JSON.parse(localStorageFactItem);
        
          }
          setListItem(parsedListItem);
          setFactItem(parsedFactItem);
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
  ///save Facts
  const saveFactItem = (newFactItem) =>{
    try{
      const stringifyFactItem = JSON.stringify(newFactItem);
      localStorage.setItem(factItemName, stringifyFactItem);
      setFactItem(newFactItem);
    }catch(error){
      setError(error);
    }
  }
  return{
    Factitem,
    saveFactItem,
    error,
    
  };



  export {useLocalStorage}