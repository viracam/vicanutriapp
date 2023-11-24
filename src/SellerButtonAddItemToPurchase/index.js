import React from "react";
import './css/sellerbuttonadditem.css'

function SellerButtonAddItemToPurchase(props){
    const onClickButton =() => {
        props.setOpenModal(true)
    }
    return (
        <button
            className="SellerButtonAddItemToPurchase"
            onClick={onClickButton}
        >
            Add Food
        </button>
    );
}
export {SellerButtonAddItemToPurchase};