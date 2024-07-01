
import React from 'react';
import { ListProvider } from '../ListContext';
import { FactProvider } from '../FactContext';
import { AppUi } from './AppUi';


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
