import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const ListContext = React.createContext();

function ListProvider(props){
    const {
        Listitem: ListItemToPurchase,
        saveListItem: saveListItemToPurchase,
        loading,
        error,
      } = useLocalStorage('LISTTOPURCHASE_V1', []);
      
    
      const [searchValue, setStateSearch] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false)
      
      
      
    
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
      const addListItemToPurchase = (id) =>{
        // texto
        const ListItemToPurchaseIndex = ListItemToPurchase.findIndex(item => item.iditem === id );
        const newListItemToPurchase = [...ListItemToPurchase];
        const intPluss = newListItemToPurchase[ListItemToPurchaseIndex].startCounter;
        console.log(intPluss);
        
        if(intPluss >= 0){
          newListItemToPurchase[ListItemToPurchaseIndex].startCounter = intPluss + 1;
          newListItemToPurchase[ListItemToPurchaseIndex].added = true;
          saveListItemToPurchase(newListItemToPurchase);
        }
        
        
        
      }
      
          
      const deductListItemToPurchase = (id) =>{
        const ListItemToPurchaseIndex = ListItemToPurchase.findIndex(item => item.iditem === id );
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
        
      
      };
      const deleItemToPurchase = (id) =>{
        // texto
        const ListItemToPurchaseIndex = ListItemToPurchase.findIndex(item => item.iditem === id );
        const newListItemToPurchase = [...ListItemToPurchase];
        newListItemToPurchase.splice(ListItemToPurchaseIndex, 1);
        saveListItemToPurchase(newListItemToPurchase);
      };
      const createItemToPurchase = (id, itemtext, price) =>{
        // texto
        const ListItemToPurchaseIndex = ListItemToPurchase.lastOfIndex(item => item.iditem === id );
        const newListItemToPurchase = [...ListItemToPurchase]; 
        const idcounter = newListItemToPurchase[ListItemToPurchaseIndex].iditem;
        const idincrement = idcounter + 1; 
        
        newListItemToPurchase.push({
          iditem: idincrement,
          itemtext,
          price,
          photo: 'La foto',
          added : false,
          startCounter: 0,
          defaultNumberOfItemsAdded: 0
      });
        saveListItemToPurchase(newListItemToPurchase);
      };

    return(
        <ListContext.Provider value={{
            loading,
            error,
            totalListItemToPurchase,
            addedListItemToPurchase,
            searchValue,
            setStateSearch,
            searchedListItemToPurchase,
            addListItemToPurchase,
            deductListItemToPurchase,
            deleItemToPurchase,
            openModal,
            setOpenModal,
            createItemToPurchase

        }}>
            {props.children}
        </ListContext.Provider>
    );
}


<ListContext.Consumer></ListContext.Consumer>

export {ListContext, ListProvider}