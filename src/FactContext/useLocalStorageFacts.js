import React from "react";

function useLocalStorageFacts( factItemName, initialFactValue){
    const[errorfact, setFactError] = React.useState(false);
    const[loadingfact, setFactLoading] = React.useState(true);
    const[totalCarbs, setFactItem] = React.useState(initialFactValue);

    React.useEffect(()=> {
        setTimeout(()=>{
          try{
            
            const localStorageFactItem = localStorage.getItem(factItemName);
            let parsedFactItem;
        
            if(!localStorageFactItem){
              localStorage.setFactItem(factItemName, JSON.stringify(initialFactValue));
              parsedFactItem = initialFactValue;
            }else{
              parsedFactItem = JSON.parse(localStorageFactItem);
          
            }
            setFactItem(parsedFactItem);
            setFactLoading(false);
          } catch(errorfact){
            setFactError(errorfact);
          }
        },3000);
      });
            ///save Facts
        const saveFactItem = (newFactItem) =>{
            try{
            const stringifyFactItem = JSON.stringify(newFactItem);
            localStorage.setFactItem(factItemName, stringifyFactItem);
            setFactItem(newFactItem);
            }catch(errorfact){
            setFactError(errorfact);
            }
        }
        return{
            totalCarbs,
            saveFactItem,
            loadingfact,
            errorfact
        }
}

export {useLocalStorageFacts}