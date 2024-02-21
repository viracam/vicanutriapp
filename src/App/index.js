
import React from 'react';
import { ListProvider } from '../ListContext';
import { FactProvider } from '../FactContext';
import { AppUi } from './AppUi';


// const defaultListItemToPurchase = [
//   {iditem: 0, itemtext: 'Zanahoria', price: '200', photo: 'La foto', nutritionfacts: 'ver nutricion', added : true, startCounter: 1},
//   {iditem: 1, itemtext: 'Banano', price: '200', photo: 'La foto', nutritionfacts: 'ver nutricion', added : false, startCounter: 0},
//   {iditem: 2, itemtext: 'Platano', price: '200', photo: 'La foto', nutritionfacts: 'ver nutricion', added : false, startCounter: 0},
//   {iditem: 3, itemtext: 'Piña', price: '200', photo: 'La foto', nutritionfacts: 'ver nutricion', added : false, startCounter: 0},
//   {iditem: 4, itemtext: 'Uva', price: '200', photo: 'La foto', nutritionfacts: 'ver nutricion', added : false, startCounter: 0}
// ];
// localStorage.setItem('LISTTOPURCHASE_V1', JSON.stringify(defaultListItemToPurchase));



function App() {


  

  // console.log('Render antes del use');

  // React.useEffect(()=>{
  //   console.log('use effect')
  // }, [totalListItemToPurchase]);
  // console.log('Render despues del use');

  return(
    <ListProvider>
    <FactProvider>
      <AppUi
      />
    </FactProvider>
    </ListProvider>
  );
  

}

export default App;
