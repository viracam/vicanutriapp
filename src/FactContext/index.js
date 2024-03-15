import React from 'react';
import { useLocalStorageFacts } from './useLocalStorageFacts';
// import { ListContext } from '../ListContext';

// const defaultListNutrient = [
//     {idFactitem: 0, itemnutrientname: 'Zanahoria',
//       grams : 10,
//       totalcarbs: 100,
//       fiber: 30,
//       starch: 30, 
//       totalsugar: 100,
//         fructose: 30,
//         galactose: 30,
//         glucose: 30,
//         lactose: 30,
//         sucrose: 30,
//         addedSugar: 30
//     }
  
//   ];
//   localStorage.setItem('LISTFACTNUTRIENT_V1', JSON.stringify(defaultListNutrient));

// Context fact----
const FactContext = React.createContext();

function FactProvider(props){
  const {
    ListfactNutrientItemChard: ListFactItemToPurchase,
    saveFactItem: saveFactFactNutrientItem,
    loadingfactNutrient,
    errorfactNutrient,
  }= useLocalStorageFacts('LISTFACTNUTRIENT_V1', [])

  /// ----Estados
  const [textClickedNutrientValue, settexClickedNutrientValue] = React.useState('');

  let clickedFactNutrientToPurchase = ListFactItemToPurchase;
    
  if(!textClickedNutrientValue.length >= 1){
    clickedFactNutrientToPurchase = ListFactItemToPurchase;
  } else{
    clickedFactNutrientToPurchase = ListFactItemToPurchase.filter(fact => {
      const FactNutritionToPurchaseText = fact.itemnutrientname.toLowerCase();
      ///estoy aqui haciendo la funcion para actualizar los facts
      const factsearchText = textClickedNutrientValue.toLowerCase();
      
      return FactNutritionToPurchaseText.includes(factsearchText);
      
    })
    saveFactFactNutrientItem(clickedFactNutrientToPurchase);
  }

  // const clikedFactItemToPurchase = FactItemToPurchase.filter(fact => !!fact.added).length;
  //     const totalListItemToPurchase = ListItemToPurchase.length;
  return(
    <React.Fragment>
    <FactContext.Provider value={{
      clickedFactNutrientToPurchase,
      textClickedNutrientValue,
      settexClickedNutrientValue,
      loadingfactNutrient,
      errorfactNutrient
    }}>
      {props.children}
    </FactContext.Provider>
    {/* <ListContext.Provider value={{
      textClickedNutrientValue
    }}>
    {props.children}
    </ListContext.Provider> */}

    </React.Fragment>
  );
}
 <FactContext.Consumer></FactContext.Consumer> 
// --------------

export {
    FactContext, FactProvider
  }