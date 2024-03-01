import React from "react";

function useLocalStorageFacts( factItemName, initialFactValue){
    const[errorfactNutrient, setFactError] = React.useState(false);
    const[loadingfactNutrient, setFactLoading] = React.useState(true);
    const[ListfactNutrientItemChard, setFactItemChard] = React.useState(initialFactValue);

    React.useEffect(()=> {
        setTimeout(()=>{
          try{
            
            const localStorageFactItem = localStorage.getItem(factItemName);
            let parsedFactItem;
        
            if(!localStorageFactItem){
              localStorage.setFactItemChard(factItemName, JSON.stringify(initialFactValue));
              parsedFactItem = initialFactValue;
            }else{
              parsedFactItem = JSON.parse(localStorageFactItem);
          
            }
            setFactItemChard(parsedFactItem);
            setFactLoading(false);
          } catch(errorfactNutrient){
            setFactError(errorfactNutrient);
          }
        },3000);
      });
            ///save Facts
        const saveFactFactNutrientItem = (newFactItem) =>{
            try{
            const stringifyFactItem = JSON.stringify(newFactItem);
            localStorage.setFactItemChard(factItemName, stringifyFactItem);
            setFactItemChard(newFactItem);
            }catch(errorfactNutrient){
            setFactError(errorfactNutrient);
            }
        }
        return{
            ListfactNutrientItemChard,
            saveFactFactNutrientItem,
            loadingfactNutrient,
            errorfactNutrient
        }
}

export {useLocalStorageFacts}