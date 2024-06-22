import React from "react";
import { FactContext } from "../FactContext";

function FactForm(){
    const [newFactValue, setNewFactValue] = React.useState({
        itemnutrientname: "",
        grams: ""
    })
    const [itemnutrientname, setitemnutrientname] = React.useState('');
    const [grams, setgrams] = React.useState('');

    const{
        createFactToPurchase,
        setOpenModalFact

    } = React.useContext(FactContext)



    const onCancelFact = () =>{
        setOpenModalFact(false)

    }
    const onSubmitFact = (event) =>{
     
        event.preventDefault();
        const lastfactupdate ={itemnutrientname, grams}
        console.log(lastfactupdate);

        setNewFactValue(lastfactupdate)

        createFactToPurchase(itemnutrientname, grams);
        console.log('el valor es ' + newFactValue)
        setOpenModalFact(false);

    
    }


    return(
        <form onSubmit={onSubmitFact}>
            <label htmlFor="itemnutrientname">Añade alimento</label>
            <input
                id="itemnutrientname"
                placeholder="Pera, cebolla, etc..."
                onChange={(e) => setitemnutrientname(e.target.value)}
                type="text"
                name={itemnutrientname}
            ></input>
            <label htmlFor="grams">Añade los gramos</label>
            <input
                id="grams"
                placeholder="200g o 300g"
                onChange={(e) => setgrams(e.target.value)}
                type="number"
                name={grams}

            ></input>
            <div>
                <button
                    type="button"
                    onClick={onCancelFact}
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
export {FactForm}