import React from "react";
import './css/vicabuttonaddfactitem.css'

function VicaButtonAddFactItem(props){
    const onClickVicaButtonAddFactItem =() => {
        props.setOpenModalFact(prevState => !prevState);
    }
    return (
        <button
            className="VicaButtonAddFactItem"
            onClick={onClickVicaButtonAddFactItem}
        >
            Add Fact
        </button>
    );
}
export {VicaButtonAddFactItem};