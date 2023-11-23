import React from "react";
import { ListContext } from "../ListContext";
import {ListCounter} from '../ListCounter';
import {ListItemstoAdd} from '../ListItemstoAdd';
import {ItemToPurchase} from '../ItemToPurchase';
import {ListSearch} from '../ListSearch';
import {SellerButtonAddItemToPurchase} from '../SellerButtonAddItemToPurchase';
import { MyModal } from "../Modal";
import { createPortal } from "react-dom";



 function AppUi(){
    const {
      error,
      loading,
      searchedListItemToPurchase,
      addListItemToPurchase,
      deleItemToPurchase,
      deductListItemToPurchase
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
              key={item.itemtext}
              text={item.itemtext}
              photo={item.photo}
              price={item.price}
              nutritionfacts={item.nutritionfacts}
              added={item.added}
              onAdded={() => addListItemToPurchase(item.itemtext)}
              onDeduct={() => deductListItemToPurchase(item.itemtext)}
              onDelete={() => deleItemToPurchase(item.itemtext)}
              defaultNumberOfItemsAdded= {item.startCounter}
            />
          ) )}
        </ListItemstoAdd>
        
        <SellerButtonAddItemToPurchase/>
        <MyModal>
          {createPortal(
            <p>tele trasportacion, recordar que se pueden poner elementos del arreglo usando los corchetes,
              {searchedListItemToPurchase[0]?.itemtext}
              </p>,
            document.getElementById('modal')
          )}
        </MyModal>
        
      </React.Fragment>
    );
 }

 export {AppUi}