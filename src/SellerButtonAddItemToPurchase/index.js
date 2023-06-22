import React from "react";
import './css/sellerbuttonadditem.css'

function SellerButtonAddItemToPurchase(){
    const onClickButton =(msg) => {
        alert(msg);
    }
    return (
        <button
            className="SellerButtonAddItemToPurchase"
            onClick={()=> onClickButton('se toco el boton')}
        >
            Add Food
        </button>
    );
}
export {SellerButtonAddItemToPurchase};