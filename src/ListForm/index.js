import React from "react";
import { ListContext } from "../ListContext";

function ListFrom(){
    const [newListValue, setNewListValue] = React.useState({
        itemtext: "",
        price: ""
    })
    const [itemtext, setItemtext] = React.useState('');
    const [price, setItemprice] = React.useState('');

    const{
        createItemToPurchase,
        setOpenModal

    } = React.useContext(ListContext)

    // const handleOnchange =(e) =>{
    //     const{name, value} = e.target;
    //     console.log(name, value)
        
    //     // setNewListValue((prev) =>{
    //     //     return{...prev, [name]: value}
    //     // })
        
    //     setNewListValue(e.target.value)
    
        

    // }

    const onCancel = () =>{
        setOpenModal(false)

    }
    const onSubmit = (event) =>{
     
        event.preventDefault();
        const lastitemupdate ={itemtext, price}
        console.log(lastitemupdate);
     

        setNewListValue(lastitemupdate)

        


        createItemToPurchase(itemtext, price);
        console.log('el valor es ' + newListValue)
        setOpenModal(false);

    
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
                onChange={(e) => setItemtext(e.target.value)}
                type="text"
                name={itemtext}
            ></input>
            <label htmlFor="price">Añade el valor</label>
            <input
                placeholder="$200 o $300"
                onChange={(e) => setItemprice(e.target.value)}
                type="number"
                name={price}

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