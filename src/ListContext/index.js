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
      const [clickedNutrientValue, setclickedNutrientValue] = React.useState('');
      
      
      
    
      const addedListItemToPurchase = ListItemToPurchase.filter(item => !!item.added).length;
      const clickedNutrientListItemToPurchase = ListItemToPurchase.filter(item => !!item.clickedNutrition).length;
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
        
      
      };
      const deleItemToPurchase = (text) =>{
        // texto
        const ListItemToPurchaseIndex = ListItemToPurchase.findIndex(item => item.itemtext === text );
        const newListItemToPurchase = [...ListItemToPurchase];
        newListItemToPurchase.splice(ListItemToPurchaseIndex, 1);
        saveListItemToPurchase(newListItemToPurchase);
      };
      const onClickedNutriction = (text) =>{
        const ListItemToPurchaseIndex = ListItemToPurchase.findIndex(item => item.itemtext === text );
        const newListItemToPurchase = [...ListItemToPurchase];
        const clickedNutritionValue = newListItemToPurchase[ListItemToPurchaseIndex].clickedNutrition;
        console.log(clickedNutritionValue);
        
        if(clickedNutritionValue === false){
          
          newListItemToPurchase[ListItemToPurchaseIndex].clickedNutrition = true;
          saveListItemToPurchase(newListItemToPurchase);
          console.log(newListItemToPurchase);
        }
        else{
          newListItemToPurchase[ListItemToPurchaseIndex].clickedNutrition = false;
          saveListItemToPurchase(newListItemToPurchase);
        }
      }
      const createItemToPurchase = (itemtext, price) =>{
        // texto
        // const ListItemToPurchaseIndex = ListItemToPurchase.findIndex(item => item.itemtext === text );
        const newListItemToPurchase = [...ListItemToPurchase];
        const idcounter = ListItemToPurchase.length + 1;
        
        // const idcounter = newListItemToPurchase.lastIndexOf(ListItemToPurchaseIndex);
        console.log('que es id coutner' + ListItemToPurchase.length);

        
        // const idincrement = idcounter;
        

        // if(idincrement === undefined || !idcounter || idcounter === 0){
        //   const idincremented = idincrement * 0;
        //   return(idincremented)
          
        // }
        // if(idincrement> 0){
        //   idincremented = idcounter + 1;
        //   return(idincremented);
        // }

        
        newListItemToPurchase.push({
          iditem: idcounter,
          itemtext: itemtext,
          price: price,
          photo: 'La foto',
          nutritionfacts: 'ver nutricion',
          clickedNutrition : false,
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
            clickedNutrientListItemToPurchase,
            clickedNutrientValue,
            setclickedNutrientValue,
            searchValue,
            setStateSearch,
            searchedListItemToPurchase,
            addListItemToPurchase,
            deductListItemToPurchase,
            deleItemToPurchase,
            openModal,
            setOpenModal,
            createItemToPurchase,
            onClickedNutriction
        }}>
            {props.children}
        </ListContext.Provider>
    );
}


<ListContext.Consumer></ListContext.Consumer>

export {ListContext, ListProvider}