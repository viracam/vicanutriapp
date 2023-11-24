import React from "react";
import { ListContext } from "../ListContext";

function ListFrom(){
    const{

    } = React.useContext(ListContext)

    const onCancel = () =>{

    }
    const onSubmit = () =>{
        
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Añade alimento</label>
            <input placeholder="Pera, cebolla, etc..."></input>
            <label>Añade el valor</label>
            <input placeholder="$200 o $300"></input>
            <div>
                <button
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}
export {ListFrom}