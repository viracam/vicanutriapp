
import React from 'react';
import {ListCounter} from './ListCounter';
import {ListItemstoAdd} from './ListItemstoAdd';
import {ItemToPurchase} from './ItemToPurchase';
import {ListSearch} from './ListSearch';
import {SellerButtonAddItemToPurchase} from './SellerButtonAddItemToPurchase';
//import './App.css';

const defaultListItemToPurchase = [
  {itemtext : 'Zanahoria', price: '200', photo: 'La foto', nutritionfacts: 'ver nutricion', added : true, startCounter: 1},
  {itemtext : 'Banano', price: '200', photo: 'La foto', nutritionfacts: 'ver nutricion', added : false, startCounter: 0},
  {itemtext : 'Platano', price: '200', photo: 'La foto', nutritionfacts: 'ver nutricion', added : false, startCounter: 0}
]


function App() {
  
  const[ListItemToPurchase, setListItemToPurchase] = React.useState(defaultListItemToPurchase);
  const [searchValue, setStateSearch] = React.useState('');
  
  

  const addedListItemToPurchase = ListItemToPurchase.filter(item => !!item.added).length;
  const totalListItemToPurchase = ListItemToPurchase.length;

  let searchedListItemToPurchase = [];

  if(!searchValue.length >= 1){
    searchedListItemToPurchase = ListItemToPurchase;
  } else{
    searchedListItemToPurchase = ListItemToPurchase.filter(item => {
      const itemToPurchaseText = item.itemtext.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return itemToPurchaseText.includes(searchText);
    })
  }

  const addListItemToPurchase = (text) =>{
    // texto
    const ListItemToPurchaseIndex = ListItemToPurchase.findIndex(item => item.itemtext === text );
    const newListItemToPurchase = [...ListItemToPurchase];
    const intPluss = newListItemToPurchase[ListItemToPurchaseIndex].startCounter;
    console.log(intPluss);
    
    if(intPluss >= 0){
      newListItemToPurchase[ListItemToPurchaseIndex].startCounter = intPluss + 1;
      newListItemToPurchase[ListItemToPurchaseIndex].added = true;
      setListItemToPurchase(newListItemToPurchase);
    }
    
    
    
  }
  const deductListItemToPurchase = (text) =>{
    const ListItemToPurchaseIndex = ListItemToPurchase.findIndex(item => item.itemtext === text );
    const newListItemToPurchase = [...ListItemToPurchase];
    const intPluss = newListItemToPurchase[ListItemToPurchaseIndex].startCounter;
    console.log(intPluss);
    
  
    if(intPluss >= 0){
      if(intPluss === 0){
        newListItemToPurchase[ListItemToPurchaseIndex].added = false;
      }
      newListItemToPurchase[ListItemToPurchaseIndex].startCounter = intPluss - 1;
      setListItemToPurchase(newListItemToPurchase);

      
      
    }
    
    if(intPluss === 0){
      newListItemToPurchase[ListItemToPurchaseIndex].startCounter = intPluss * 0;
      alert('Ya quitaste este articulo');
      
    }
    
    
    

  }
  const deleItemToPurchase = (text) =>{
    // texto
    const ListItemToPurchaseIndex = ListItemToPurchase.findIndex(item => item.itemtext === text );
    const newListItemToPurchase = [...ListItemToPurchase];
    newListItemToPurchase.splice(ListItemToPurchaseIndex, 1);
    setListItemToPurchase(newListItemToPurchase);
  }

  
  return (
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

export default App;
