import React from "react";
import { ListContext } from "../ListContext";
import './css/listcounter.css';
function ListCounter(){

    const {addedListItemToPurchase } = React.useContext(ListContext);
    
    return (
        <h2 className="ListCounter">Se ha agregado {addedListItemToPurchase} elementos al carrito</h2>
    );
}
export {ListCounter};