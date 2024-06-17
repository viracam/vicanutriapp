import React from 'react';
import { useLocalStorageFacts } from './useLocalStorageFacts';
// import { itemtopurchase} from '../ItemToPurchase';
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
    //saveFactItem: saveFactFactNutrientItem,
    loadingfactNutrient,
    errorfactNutrient,
  }= useLocalStorageFacts('LISTFACTNUTRIENT_V1', [])

  /// ----Estados
  const [textClickedNutrientValueContext, settexClickedNutrientValueContext] = React.useState(props.text);

      
  const onMouseDownNutritionValue = (event) =>{
      
    settexClickedNutrientValueContext(event.target.value);
   
  console.log('Este es el textnutrientVALUEcONTEXT' + textClickedNutrientValueContext)


}

  let clickedFactNutrientToPurchase = [];
    
  if(!textClickedNutrientValueContext){
    clickedFactNutrientToPurchase = ListFactItemToPurchase;
  } else{
    clickedFactNutrientToPurchase = ListFactItemToPurchase.filter(fact => {
      const FactNutritionToPurchaseText = fact.itemnutrientname.toLowerCase();
      ///estoy aqui haciendo la funcion para actualizar los facts
      const factsearchText = textClickedNutrientValueContext.toLowerCase();
      
      return FactNutritionToPurchaseText.includes(factsearchText);
      
    })
    // saveFactFactNutrientItem(clickedFactNutrientToPurchase);
    // console.log(clickedFactNutrientToPurchase)
  }

  // const clikedFactItemToPurchase = FactItemToPurchase.filter(fact => !!fact.added).length;
  //     const totalListItemToPurchase = ListItemToPurchase.length;
  return(
    <React.Fragment>
    <FactContext.Provider value={{
      clickedFactNutrientToPurchase,
      textClickedNutrientValueContext,
      settexClickedNutrientValueContext,
      onMouseDownNutritionValue,
      loadingfactNutrient,
      errorfactNutrient
    }}>
      {props.children}
    </FactContext.Provider>
    {/* <ListContext.Provider value={{
      textClickedNutrientValueContext
    }}>
    {props.children}
    // </ListContext.Provider> */}

    </React.Fragment>
  );
}
 <FactContext.Consumer></FactContext.Consumer> 
// --------------

export {
    FactContext, FactProvider
  }