
import React from 'react';

import { AppUi } from './AppUi';

// const defaultListItemToPurchase = [
//   {itemtext : 'Zanahoria', price: '200', photo: 'La foto', nutritionfacts: 'ver nutricion', added : true, startCounter: 1},
//   {itemtext : 'Banano', price: '200', photo: 'La foto', nutritionfacts: 'ver nutricion', added : false, startCounter: 0},
//   {itemtext : 'Platano', price: '200', photo: 'La foto', nutritionfacts: 'ver nutricion', added : false, startCounter: 0}
// ];
function useLocalStorage(itemName, initialValue){

  const localStorageListItem = localStorage.getItem(itemName);
  let parsedListItem;
  
  if(!localStorageListItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedListItem = initialValue;
  }else{
    parsedListItem = JSON.parse(localStorageListItem);

  }
  const[Listitem, setListItem] = React.useState(parsedListItem);

  /// save ToDos
  const saveListItem = (newListItem) =>{
    const stringifyListItem = JSON.stringify(newListItem);
    localStorage.setItem(itemName, stringifyListItem);
    setListItem(newListItem);
  }
  return[
    Listitem,
    saveListItem,
  ];

}

function App() {
  const [ListItemToPurchase, saveListItemToPurchase] = useLocalStorage('LISTTOPURCHASE_V1', []);
  

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
      saveListItemToPurchase(newListItemToPurchase);
    }
    
    
    
  }
      
  const deductListItemToPurchase = (text) =>{
    const ListItemToPurchaseIndex = ListItemToPurchase.findIndex(item => item.itemtext === text );
    const newListItemToPurchase = [...ListItemToPurchase];
    const intPluss = newListItemToPurchase[ListItemToPurchaseIndex].startCounter;
    console.log(intPluss);

  
    if(intPluss >= 2){
      newListItemToPurchase[ListItemToPurchaseIndex].startCounter = intPluss - 1;


      saveListItemToPurchase(newListItemToPurchase);  
      
    }
    else{
      newListItemToPurchase[ListItemToPurchaseIndex].added = false;
      newListItemToPurchase[ListItemToPurchaseIndex].startCounter = intPluss * 0;
      
      saveListItemToPurchase(newListItemToPurchase);
      alert( 'El elemento ' + newListItemToPurchase[ListItemToPurchaseIndex].itemtext + ' se ha quitado' );
    }
    
  
  }
  const deleItemToPurchase = (text) =>{
    // texto
    const ListItemToPurchaseIndex = ListItemToPurchase.findIndex(item => item.itemtext === text );
    const newListItemToPurchase = [...ListItemToPurchase];
    newListItemToPurchase.splice(ListItemToPurchaseIndex, 1);
    saveListItemToPurchase(newListItemToPurchase);
  }
  return(
    <AppUi
    totalListItemToPurchase={totalListItemToPurchase}
    addedListItemToPurchase={addedListItemToPurchase}
    searchValue={searchValue}
    setStateSearch={setStateSearch}
    searchedListItemToPurchase={searchedListItemToPurchase}
    addListItemToPurchase={addListItemToPurchase}
    deductListItemToPurchase={deductListItemToPurchase}
    deleItemToPurchase={deleItemToPurchase}
    />
  );
  

}

export default App;
