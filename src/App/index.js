
import React from 'react';

import { AppUi } from './AppUi';

// const defaultListItemToPurchase = [
//   {itemtext : 'Zanahoria', price: '200', photo: 'La foto', nutritionfacts: 'ver nutricion', added : true, startCounter: 1},
//   {itemtext : 'Banano', price: '200', photo: 'La foto', nutritionfacts: 'ver nutricion', added : false, startCounter: 0},
//   {itemtext : 'Platano', price: '200', photo: 'La foto', nutritionfacts: 'ver nutricion', added : false, startCounter: 0}
// ];


function App() {
  const localStorageList = localStorage.getItem('LISTTOPURCHASE_V1');
  let parsedList;

  if(!localStorageList){
    localStorage.setItem('LISTTOPURCHASE_V1', JSON.stringify([]));
    parsedList = [];

  }else{
    parsedList = JSON.parse(localStorageList);

  }
  
  const[ListItemToPurchase, setListItemToPurchase] = React.useState(parsedList);
  const [searchValue, setStateSearch] = React.useState('');
  
  const saveListItemToPurchase = (newListItemToPurchase) =>{
    const stringifyListItemToPurchase = JSON.stringify(newListItemToPurchase);
    localStorage.setItem('LISTTOPURCHASE_V1', stringifyListItemToPurchase);
    setListItemToPurchase(newListItemToPurchase);
  }
  

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
