import React from 'react';
import { useLocalStorageFacts } from './useLocalStorageFacts';

const defaultListNutrient = [
    {iditem: 0, itemnutrientname: 'Zanahoria',
      grams : 10,
      totalcarbs: 100,
      fiber: 30,
      starch: 30, 
      totalsugar: 100,
        fructose: 30,
        galactose: 30,
        glucose: 30,
        lactose: 30,
        sucrose: 30,
        addedSugar: 30
    }
  
  ];
  localStorage.setItem('LISTFACTNUTRIENT_V1', JSON.stringify(defaultListNutrient));

// Context fact----
const FactContext = React.createContext();

function FactProvider(props){
  const {Factitem: valueFactcontext} = useLocalStorageFacts('LISTFACTNUTRIENT_V1', JSON.stringify(defaultListNutrient))
  return(
    <FactContext.Provider value={{
      valueFactcontext
    }}>
      {props.children}
    </FactContext.Provider>
  );
}
<FactContext.Consumer></FactContext.Consumer>
// --------------

export {
    FactContext, FactProvider
  }