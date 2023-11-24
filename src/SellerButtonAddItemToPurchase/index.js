import React from "react";
import './css/sellerbuttonadditem.css'

function SellerButtonAddItemToPurchase(props){
    const onClickButton =() => {
        props.setOpenModal(preState => !preState);
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