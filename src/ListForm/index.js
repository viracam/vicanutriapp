import React from "react";
import { ListContext } from "../ListContext";

function ListFrom(){
    const [newListValue, setNewListValue] = React.useState({
        itemtext: "",
        price: ""
    })
    

    const{
        createItemToPurchase,

    } = React.useContext(ListContext)

    const handleOnchange =(e) =>{
        const{name, value} = e.target;
        console.log(name, value)
        
        // setNewListValue((prev) =>{
        //     return{...prev, [name]: value}
        // })
        setNewListValue(e.target.value)
        

    }
    const onCancel = () =>{

    }
    const onSubmit = (event) =>{
     
        event.preventDefault();
        createItemToPurchase(newListValue);
        console.log('el valor es ' + newListValue)

    
    }
    // const onSubmit = (event) =>{
    //     event.preventDefault();
    //     createItemToPurchase(newListValue);
        
    // }

    return(
        <form onSubmit={onSubmit}>
            <label htmlFor="itemtext">Añade alimento</label>
            <input 
                placeholder="Pera, cebolla, etc..."
                onChange={handleOnchange}
                type="text"
                name="itemtext"
            ></input>
            <label htmlFor="price">Añade el valor</label>
            <input
                placeholder="$200 o $300"
                onChange={handleOnchange}
                type="number"
                name="price"

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