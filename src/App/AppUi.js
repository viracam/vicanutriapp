import React from "react";
import {ListCounter} from '../ListCounter';
import {ListItemstoAdd} from '../ListItemstoAdd';
import {ItemToPurchase} from '../ItemToPurchase';
import {ListSearch} from '../ListSearch';
import {SellerButtonAddItemToPurchase} from '../SellerButtonAddItemToPurchase';

 function AppUi({

    totalListItemToPurchase,
    addedListItemToPurchase,
    searchValue,
    setStateSearch,
    searchedListItemToPurchase,
    addListItemToPurchase,
    deductListItemToPurchase,
    deleItemToPurchase,
 }){
    return(
        <React.Fragment>
        <ListCounter
          total={totalListItemToPurchase}
          added={addedListItemToPurchase}
        />
        
        <ListSearch
          searchValue={searchValue}
          setStateSearch={setStateSearch}
        />
        <ListItemstoAdd>
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
        
      </React.Fragment>
    );
 }

 export {AppUi}