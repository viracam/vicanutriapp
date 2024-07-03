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
            <span>
                <b
                    className="Button-Text-Add"
                >Comida</b>
                <b
                    className="Button-Icon-Add"
                >+</b></span>
        </button>
    );
}
export {SellerButtonAddItemToPurchase};