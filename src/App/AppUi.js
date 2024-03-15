import React from "react";
import { ListContext } from "../ListContext";
import { FactContext } from "../FactContext";
import {ListCounter} from '../ListCounter';
import {ListItemstoAdd} from '../ListItemstoAdd';
import {ItemToPurchase} from '../ItemToPurchase';
import {ListSearch} from '../ListSearch';
import { NutritionChards } from "../NutritionChards";
import {SellerButtonAddItemToPurchase} from '../SellerButtonAddItemToPurchase';
import { MyModal, createPortal } from "../Modal";
import { ListFrom } from "../ListForm";
import { ListFactToView } from "../ListFactToView";


// DATA FACT BASE
const defaultListNutrient = [
  {idfactitem: 0, itemnutrientname: 'Zanahoria',
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
  },
  {idfactitem: 1, itemnutrientname: 'Banano',
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
  },
  {idFactitem: 3, itemnutrientname: 'Platano',
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



 function AppUi(){
    const {
      error,
      loading,
      searchedListItemToPurchase,
      addListItemToPurchase,
      deleItemToPurchase,
      deductListItemToPurchase,
      onClickedNutriction,
      openModal,
      setOpenModal,
      
    } = React.useContext(ListContext);
    const {
      // textClickedNutrientValue,
      // settexClickedNutrientValue,
      clickedFactNutrientToPurchase,
      loadingfactNutrient,
      errorfactNutrient
    } = React.useContext(FactContext);
    return(
        <React.Fragment>
        <ListCounter
        />
        <ListFactToView>
          {errorfactNutrient&& <p>Estamos errando..</p>}
          {loadingfactNutrient  && <p>Estamos cargando..</p>}
          {(!loadingfactNutrient && !clickedFactNutrientToPurchase.length) && <p>no estamos demorando mas en cargar la informacion</p>}
        {clickedFactNutrientToPurchase.map(fact =>(
        <NutritionChards
          key={fact.idfactitem + fact.itemnutrientname}
          itemnutrientname={fact.itemnutrientname}
          grams={fact.grams}
          totalcarbs={fact.totalcarbs}
          fiber={fact.fiber}
          starch={fact.starch} 
          totalsugar={fact.totalsugar}
            fructose={fact.fructose}
            galactose={fact.galactose}
            glucose={fact.glucose}
            lactose={fact.lactose}
            sucrose={fact.sucrose}
            addedSugar={fact.addedSugar}

        />
          ))}
          </ListFactToView>
         
          
          {/* {errorfact && <p>Estamos errando..</p>}
          {loadingfact && <p>Estamos cargando..</p>}
          {(!loadingfact) && <p>no estamos demorando mas en cargar la informacion</p>}
        </NutritionChards> */}
        
        <ListSearch/>
       
            <ListItemstoAdd>
            {error && <p>Estamos errando..</p>}
            {loading && <p>Estamos cargando..</p>}
            {(!loading && !searchedListItemToPurchase.length) && <p>crea to primer alimento</p>}

          {searchedListItemToPurchase.map(item =>(
            <ItemToPurchase
              key={item.iditem}
              text={item.itemtext}
              photo={item.photo}
              price={item.price}
              nutritionfacts={item.nutritionfacts}
              clickedNutrition={item.clickedNutrition}
              added={item.added}
              onAdded={() => addListItemToPurchase(item.itemtext)}
              onDeduct={() => deductListItemToPurchase(item.itemtext)}
              onDelete={() => deleItemToPurchase(item.itemtext)}
              onClickNutrition={()=> onClickedNutriction(item.itemtext)}
              defaultNumberOfItemsAdded= {item.startCounter}
            />
          ) )}
        </ListItemstoAdd>

        
        
      
        {!!openModal &&  MyModal(createPortal(
          <ListFrom></ListFrom>,
          document.getElementById('modal')))}
        
         {/* {!!openModal &&  MyModal(createPortal(
            <p>tele trasportacion, recordar que se pueden poner elementos del arreglo usando los corchetes,
              {searchedListItemToPurchase[0]?.itemtext}
              </p>,
          document.getElementById('modal'))
          
          )} */}
          <SellerButtonAddItemToPurchase
            setOpenModal={setOpenModal}
          />

        
      </React.Fragment>

    );
 }

 export {AppUi}