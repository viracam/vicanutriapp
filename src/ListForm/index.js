import React from "react";
import { ListContext } from "../ListContext";

function ListFrom(){
    const [newListValue, setNewListValue] = React.useState()
    

    const{
        createItemToPurchase,

    } = React.useContext(ListContext)

    const onChange = (onFoodNameChange, onFoodPriceChange) =>{

    
     onFoodNameChange = (event) =>{
        this.setState({itemtext: event.target.value})
        setNewListValue(event.target.value)

       

    }
     onFoodPriceChange = (event) =>{
        this.setState({price: event.target.value})
        setNewListValue(event.target.value)
       

    }
}


    

    const onCancel = () =>{

    }
    const onSubmit = (event) =>{
     
        event.preventDefault();
        console.log(this.state);
        createItemToPurchase(newListValue);
    
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
                onChange={onChange(this.onFoodNameChange.bind(this))}
                value={this.state.itemtext}
            ></input>
            <label htmlFor="price">Añade el valor</label>
            <input
                placeholder="$200 o $300"
                onChange={onChange(this.onFoodPriceChange.bind(this))}
                value={this.state.price}

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