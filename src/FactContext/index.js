import React from 'react';
import { useLocalStorageFacts } from './useLocalStorageFacts';
// import { itemtopurchase} from '../ItemToPurchase';
// import { ListContext } from '../ListContext';



// Context fact----
const FactContext = React.createContext();

function FactProvider(props){
  const {
    ListfactNutrientItemChard: ListFactItemToPurchase,
    saveFactItem: saveFactNutrientItem,
    loadingfactNutrient,
    errorfactNutrient,
  }= useLocalStorageFacts('LISTFACTNUTRIENT_V1', [])

  /// ----Estados
  const [textClickedNutrientValueContext, settexClickedNutrientValueContext] = React.useState('');
  const [openModalFact, setOpenModalFact] = React.useState(false)

      
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
  const createFactToPurchase = (
                                itemnutrientname, grams,
                                            //---carbs
                                            totalcarbs,
                                            fiber,
                                            starch, 
                                            totalsugar,
                                                fructose,
                                                galactose,
                                                glucose,
                                                lactose,
                                                sucrose,
                                            addedsugar,
                                            netcarbs,
                                            //---lipids
                                            fat,
                                                monounsaturated,
                                                polyunsaturated,
                                                    omega3,
                                                    omega6,
                                                saturated,
                                            //---proteins
                                            protein,
                                                cystine,
                                                histidine,
                                                isoleucine,
                                                leucine,
                                                lysine,
                                                methionine,
                                                phenylalanine,
                                                threonine,
                                                tryptophan,
                                                tyrosine,
                                                valine,
                                            //---vitamins
                                            b1thiamine,
                                            b2riboflavin,
                                            b3niacin,
                                            b5pantothenicacid,
                                            b6pyridoxine,
                                            b12cobalamin,
                                            folate,
                                            vitamina,
                                            vitaminc,
                                            vitamine,
                                            vitamink,
                                            //------minerals
                                            calcium,
                                            copper,
                                            iron,
                                            magnesium,
                                            manganese,
                                            phosphorus,
                                            potassium,
                                            selenium,
                                            sodium,
                                            zinc
      ) =>{
    
    const newFactListItemToPurchase = [...ListFactItemToPurchase];
    const idfactcounter = ListFactItemToPurchase.length + 1;
    
    
    console.log('que es id coutner' + ListFactItemToPurchase.length);

    
  
    
    newFactListItemToPurchase.push({
      idFactitem: idfactcounter,
      itemnutrientname: itemnutrientname,
      grams: grams,
        //---carbs
        totalcarbs: totalcarbs,
        fiber: fiber,
        starch: starch,
        totalsugar: totalsugar,
          fructose: fructose,
          galactose: galactose,
          glucose: glucose,
          lactose: lactose,
          sucrose: sucrose,
        addedsugar: addedsugar,
        netcarbs: netcarbs,
        //---lipids
        fat : fat,
        monounsaturated : monounsaturated,
        polyunsaturated : polyunsaturated,
            omega3 : omega3,
            omega6 : omega6,
        saturated : saturated,
        //---proteins
        protein : protein,
            cystine : cystine,
            histidine : histidine,
            isoleucine : isoleucine,
            leucine : leucine,
            lysine : lysine,
            methionine : methionine,
            phenylalanine : phenylalanine,
            threonine : threonine,
            tryptophan : tryptophan,
            tyrosine : tyrosine,
            valine : valine,
        //---vitamins
        b1thiamine : b1thiamine,
        b2riboflavin : b2riboflavin,
        b3niacin : b3niacin,
        b5pantothenicacid : b5pantothenicacid,
        b6pyridoxine : b6pyridoxine,
        b12cobalamin : b12cobalamin,
        folate : folate,
        vitamina : vitamina,
        vitaminc : vitaminc,
        vitamine : vitamine,
        vitamink : vitamink,
        //------minerals
        calcium : calcium,
        copper : copper,
        iron : iron,
        magnesium : magnesium,
        manganese : manganese,
        phosphorus : phosphorus,
        potassium : potassium,
        selenium : selenium,
        sodium : sodium,
        zinc : zinc
      
  });
    saveFactNutrientItem(newFactListItemToPurchase);

  };

  // const clikedFactItemToPurchase = FactItemToPurchase.filter(fact => !!fact.added).length;
  //     const totalListItemToPurchase = ListFactItemToPurchase.length;
  return(
    <React.Fragment>
    <FactContext.Provider value={{
      clickedFactNutrientToPurchase,
      textClickedNutrientValueContext,
      settexClickedNutrientValueContext,
      onMouseDownNutritionValue,
      loadingfactNutrient,
      errorfactNutrient,
      openModalFact,
      setOpenModalFact,
      createFactToPurchase
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