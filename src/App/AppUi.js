import React from "react";
import { ListContext } from "../ListContext";
import {ListCounter} from '../ListCounter';
import {ListItemstoAdd} from '../ListItemstoAdd';
import {ItemToPurchase} from '../ItemToPurchase';
import {ListSearch} from '../ListSearch';
import {SellerButtonAddItemToPurchase} from '../SellerButtonAddItemToPurchase';
import { MyModal, createPortal } from "../Modal";
import { ListFrom } from "../ListForm";





 function AppUi(){
    const {
      error,
      loading,
      searchedListItemToPurchase,
      addListItemToPurchase,
      deleItemToPurchase,
      deductListItemToPurchase,
      openModal,
      setOpenModal
    } = React.useContext(ListContext);
    return(
        <React.Fragment>
        <ListCounter
        />
        
        <ListSearch
        />

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
              added={item.added}
              onAdded={() => addListItemToPurchase(item.iditem)}
              onDeduct={() => deductListItemToPurchase(item.iditem)}
              onDelete={() => deleItemToPurchase(item.iditem)}
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