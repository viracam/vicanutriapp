import React from "react";
import './css/listcounter.css';
function ListCounter({added}){
    
    return (
        <h2 className="ListCounter">Se ha agregado {added} elementos al carrito</h2>
    );
}
export {ListCounter};