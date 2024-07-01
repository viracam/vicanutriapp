import React from "react";
import './css/vicabuttonaddfactitem.css'
import {ListContext} from '../ListContext';


function VicaButtonAddFactItem(props){
    const{
    
        setOpenModal
    
    } = React.useContext(ListContext);
    const onClickVicaButtonAddFactItem =() => {
        setOpenModal(false);
        props.setOpenModalFact(prevState => !prevState);
    }
    return (
        <button
            className="VicaButtonAddFactItem"
            onClick={onClickVicaButtonAddFactItem}
        >
            Nutricion
        </button>
    );
}
export {VicaButtonAddFactItem };