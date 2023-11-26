import React from "react";
import { ListContext } from "../ListContext";

function ListFrom(){
    const [newListValue, setNewListValue] = React.useState()

    const{
        added,

    } = React.useContext(ListContext)

    const onChange = (event) =>{
        setNewListValue(event.target.value)

    }
    const onCancel = () =>{

    }
    const onSubmit = (event) =>{
        event.preventDefault();
        added(newListValue);
        
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Añade alimento</label>
            <input 
                placeholder="Pera, cebolla, etc..."
                onChange={onChange}
                value={newListValue}
            ></input>
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