
import React from 'react';
import { ListProvider } from '../ListContext';
import { AppUi } from './AppUi';


// const defaultListItemToPurchase = [
//   {itemtext : 'Zanahoria', price: '200', photo: 'La foto', nutritionfacts: 'ver nutricion', added : true, startCounter: 1},
//   {itemtext : 'Banano', price: '200', photo: 'La foto', nutritionfacts: 'ver nutricion', added : false, startCounter: 0},
//   {itemtext : 'Platano', price: '200', photo: 'La foto', nutritionfacts: 'ver nutricion', added : false, startCounter: 0},
//   {itemtext : 'Piña', price: '200', photo: 'La foto', nutritionfacts: 'ver nutricion', added : false, startCounter: 0},
//   {itemtext : 'Uva', price: '200', photo: 'La foto', nutritionfacts: 'ver nutricion', added : false, startCounter: 0}
// ];


function App() {


  

  // console.log('Render antes del use');

  // React.useEffect(()=>{
  //   console.log('use effect')
  // }, [totalListItemToPurchase]);
  // console.log('Render despues del use');

  return(
    <ListProvider>
      <AppUi
      />
    </ListProvider>
  );
  

}

export default App;
