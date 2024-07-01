import React from "react";
import './css/sellerbuttonadditem.css';
import { FactContext } from "../FactContext";


function SellerButtonAddItemToPurchase(props){
    const{
    
        setOpenModalFact
    
    } = React.useContext(FactContext);
    const onClickButton =() => {
        setOpenModalFact(false);
        props.setOpenModal(prevState => !prevState);
    }
    return (
        <button
            className="SellerButtonAddItemToPurchase"
            onClick={onClickButton}
        >
            Comida
        </button>
    );
}
export {SellerButtonAddItemToPurchase};