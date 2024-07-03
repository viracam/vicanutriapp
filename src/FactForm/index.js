import React from "react";
import { FactContext } from "../FactContext";

function FactForm(){
    const [newFactValue, setNewFactValue] = React.useState({
        itemnutrientname: "",
        grams: ""
    })
    const [itemnutrientname, setitemnutrientname] = React.useState('');
    const [grams, setgrams] = React.useState('');
    /// ------carbs -----
    const [fiber, setfiber] = React.useState('');
    const [starch, setstarch] = React.useState('');
    const [fructose, setfructose] = React.useState('');
    const [galactose, setgalactose] = React.useState('');
    const [glucose, setglucose] = React.useState('');
    const [lactose, setlactose] = React.useState('');
    const [sucrose, setsucrose] = React.useState('');
    const [addedsugars, setaddedsugars] = React.useState('');
    const [netcarbs, setnetcarbs] = React.useState('');
    ///-----lipids
    const [monounsaturated, setmonounsaturated] = React.useState('');
    const [polyunsaturated, setpolyunsaturated] = React.useState('');
    const [omega3, setomega3] = React.useState('');
    const [omega6, setomega6] = React.useState('');
    const [saturated, setsaturated] = React.useState('');
    ////------proteins
    const [protein, setprotein] = React.useState('');
    const [cystine, setcystine] = React.useState('');
    const [histidine, sethistidine] = React.useState('');
    const [isoleucine, setisoleucine] = React.useState('');
    const [leucine, setleucine] = React.useState('');
    const [lysine, setlysine] = React.useState('');
    const [methionine, setmethionine] = React.useState('');
    const [phenylalanine, setphenylalanine] = React.useState('');
    const [threonine, setthreonine] = React.useState('');
    const [tryptophan, settryptophan] = React.useState('');
    const [tyrosine, settyrosine] = React.useState('');
    const [valine, setvaline] = React.useState('');


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
            {/* ///-------------------carbs------------------------ */}
            <div 
                className="Form-Carbohidrates Macro"
            >
                <h2>Carboidratos</h2>
                <label htmlFor="fiber">Añade la Fibra</label>
                <input
                    id="fiber"
                    placeholder="200g o 300g"
                    onChange={(e) => setfiber(e.target.value)}
                    type="number"
                    name={fiber}

                ></input>
                <label htmlFor="starch">Añade el Almidon</label>
                <input
                    id="starch"
                    placeholder="200g o 300g"
                    onChange={(e) => setstarch(e.target.value)}
                    type="number"
                    name={starch}

                ></input>
                <div
                    className="Inner-Form-Sugars"
                >
                    <h3>Azúcares</h3>
                    <label htmlFor="fructose">Añade la Fructosa</label>
                    <input
                        id="fructose"
                        placeholder="200g o 300g"
                        onChange={(e) => setfructose(e.target.value)}
                        type="number"
                        name={fructose}

                    ></input>
                    <label htmlFor="galactose">Añade la Galactosa</label>
                    <input
                        id="galactose"
                        placeholder="200g o 300g"
                        onChange={(e) => setgalactose(e.target.value)}
                        type="number"
                        name={galactose}

                    ></input>
                    <label htmlFor="glucose">Añade la Glucosa</label>
                    <input
                        id="glucose"
                        placeholder="200g o 300g"
                        onChange={(e) => setglucose(e.target.value)}
                        type="number"
                        name={glucose}

                    ></input>
                    <label htmlFor="lactose">Añade la Lactosa</label>
                    <input
                        id="lactose"
                        placeholder="200g o 300g"
                        onChange={(e) => setlactose(e.target.value)}
                        type="number"
                        name={lactose}

                    ></input>
                    <label htmlFor="sucrose">Añade la Sacarosa</label>
                    <input
                        id="sucrose"
                        placeholder="200g o 300g"
                        onChange={(e) => setsucrose(e.target.value)}
                        type="number"
                        name={sucrose}

                    ></input>
                </div>
                <label htmlFor="addedsugars">Azúcares Añadidos</label>
                <input
                    id="addedsugars"
                    placeholder="200g o 300g"
                    onChange={(e) => setaddedsugars(e.target.value)}
                    type="number"
                    name={addedsugars}

                ></input>
                <label htmlFor="netcarbs">Carbohidratos Netos</label>
                <input
                    id="netcarbs"
                    placeholder="200g o 300g"
                    onChange={(e) => setnetcarbs(e.target.value)}
                    type="number"
                    name={netcarbs}

                ></input>
            </div>
            {/* ///------ ------------Lipids--------------------- */}
            <div 
                className="Form-Lipids Macro"
            >
                <h2>Grasas</h2>
                <label htmlFor="monounsaturated ">Monosaturada</label>
                <input
                    id="monounsaturated"
                    placeholder="200g o 300g"
                    onChange={(e) => setmonounsaturated(e.target.value)}
                    type="number"
                    name={monounsaturated}

                ></input>
                <label htmlFor="polyunsaturated">Polinsaturada</label>
                <input
                    id="polyunsaturated"
                    placeholder="200g o 300g"
                    onChange={(e) => setpolyunsaturated(e.target.value)}
                    type="number"
                    name={polyunsaturated}

                ></input>
                <div
                    className="Inner-Form-Polyunsaturated"
                >
                    <h3>Omega 3</h3>
                    <label htmlFor="omega3">Omega 3</label>
                    <input
                        id="omega3"
                        placeholder="200g o 300g"
                        onChange={(e) => setomega3(e.target.value)}
                        type="number"
                        name={omega3}

                    ></input>
                    <label htmlFor="omega6">Omega 6</label>
                    <input
                        id="omega6"
                        placeholder="200g o 300g"
                        onChange={(e) => setomega6(e.target.value)}
                        type="number"
                        name={omega6}

                    ></input>
                </div>
                <label htmlFor="saturated">Grasas Saturadas</label>
                <input
                    id="saturated"
                    placeholder="200g o 300g"
                    onChange={(e) => setsaturated(e.target.value)}
                    type="number"
                    name={saturated}

                ></input>
                <label htmlFor="cholesterol">Colesterol</label>
                <input
                    id="netcarbs"
                    placeholder="200g o 300g"
                    onChange={(e) => setnetcarbs(e.target.value)}
                    type="number"
                    name={netcarbs}

                ></input>
            </div>
            {/* ////----------------------Protein---------------------- */}
            <div 
                className="Form-Protein Macro"
            >
                <h2>Proteinas</h2>
                <label htmlFor="protein">Proteina</label>
                <input
                    id="protein"
                    placeholder="200g o 300g"
                    onChange={(e) => setprotein(e.target.value)}
                    type="number"
                    name={protein}

                ></input>
                
                <div
                    className="Inner-Form-Proteins-essentials"
                >
                    
                    <label htmlFor="cystine">Cistina</label>
                    <input
                        id="cystine"
                        placeholder="200g o 300g"
                        onChange={(e) => setcystine(e.target.value)}
                        type="number"
                        name={cystine}

                    ></input>
                    <label htmlFor="histidine">Histidina</label>
                    <input
                        id="histidine"
                        placeholder="200g o 300g"
                        onChange={(e) => sethistidine(e.target.value)}
                        type="number"
                        name={histidine}

                    ></input>
                    <label htmlFor="isoleucine">Isoleucina</label>
                    <input
                        id="isoleucine"
                        placeholder="200g o 300g"
                        onChange={(e) => setisoleucine(e.target.value)}
                        type="number"
                        name={isoleucine}

                    ></input>
                    <label htmlFor="leucine">Leucina</label>
                    <input
                        id="leucine"
                        placeholder="200g o 300g"
                        onChange={(e) => setleucine(e.target.value)}
                        type="number"
                        name={leucine}

                    ></input>
                    <label htmlFor="lysine">Lisina</label>
                    <input
                        id="lysine"
                        placeholder="200g o 300g"
                        onChange={(e) => setlysine(e.target.value)}
                        type="number"
                        name={lysine}

                    ></input>
                    <label htmlFor="methionine">Metionina</label>
                    <input
                        id="methionine"
                        placeholder="200g o 300g"
                        onChange={(e) => setmethionine(e.target.value)}
                        type="number"
                        name={methionine}

                    ></input>
                    <label htmlFor="phenylalanine">Fenilalanina</label>
                    <input
                        id="phenylalanine"
                        placeholder="200g o 300g"
                        onChange={(e) => setphenylalanine(e.target.value)}
                        type="number"
                        name={phenylalanine}

                    ></input>
                    <label htmlFor="threonine">Treonina</label>
                    <input
                        id="threonine"
                        placeholder="200g o 300g"
                        onChange={(e) => setthreonine(e.target.value)}
                        type="number"
                        name={threonine}

                    ></input>
                    <label htmlFor="tryptophan">Triptófano</label>
                    <input
                        id="tryptophan"
                        placeholder="200g o 300g"
                        onChange={(e) => settryptophan(e.target.value)}
                        type="number"
                        name={tryptophan}

                    ></input>
                    <label htmlFor="tyrosine">Tirosina</label>
                    <input
                        id="tyrosine"
                        placeholder="200g o 300g"
                        onChange={(e) => settyrosine(e.target.value)}
                        type="number"
                        name={tyrosine}

                    ></input>
                    <label htmlFor="valine">Valine</label>
                    <input
                        id="valine"
                        placeholder="200g o 300g"
                        onChange={(e) => setvaline(e.target.value)}
                        type="number"
                        name={valine}

                    ></input>
                </div>
                
                
            </div>
            {/* ///----------------------Submit---------------------- */}
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