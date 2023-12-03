import React from "react";
import { ListContext } from "../ListContext";

function ListFrom(){
    const [newListValue, setNewListValue] = React.useState()
    const [newListValue2, setNewListValue2] = React.useState()
    

    const{
        createItemToPurchase,

    } = React.useContext(ListContext)

    const onChange = (event) =>{
        setNewListValue || setNewListValue2(event.target.value)
       

    }
    

    const onCancel = () =>{

    }
    const onSubmit = (event) =>{
        event.preventDefault();
        createItemToPurchase(newListValue, newListValue2);
        
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
            <input
                placeholder="$200 o $300"
                onChange={onChange}
                value={newListValue2}

            ></input>
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