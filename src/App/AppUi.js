import React from "react";
import { ListContext } from "../ListContext";
import {ListCounter} from '../ListCounter';
import {ListItemstoAdd} from '../ListItemstoAdd';
import {ItemToPurchase} from '../ItemToPurchase';
import {ListSearch} from '../ListSearch';
import {SellerButtonAddItemToPurchase} from '../SellerButtonAddItemToPurchase';

 function AppUi(){
    return(
        <React.Fragment>
        <ListCounter
        />
        
        <ListSearch
        />
        <ListContext.Consumer>
          {({
            error,
            loading,
            searchedListItemToPurchase,
            addListItemToPurchase,
            deleItemToPurchase,
            deductListItemToPurchase,
            defaultNumberOfItemsAdded
          }) =>(
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
          )}
        </ListContext.Consumer>
        <SellerButtonAddItemToPurchase/>
        
      </React.Fragment>
    );
 }

 export {AppUi}