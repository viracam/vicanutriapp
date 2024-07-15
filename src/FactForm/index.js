import React from "react";
import { FactContext } from "../FactContext";
import '../FactForm/css/FactForm.css'

function FactForm(){
    const [newFactValue, setNewFactValue] = React.useState({
        itemnutrientname: "",
        grams: ""
    })
    const [itemnutrientname, setitemnutrientname] = React.useState('');
    const [grams, setgrams] = React.useState('');
    /// ------carbs -----
    const [totalcarbs, settotalcarbs] = React.useState('');
    const [fiber, setfiber] = React.useState('');
    const [starch, setstarch] = React.useState('');
    const [totalsugar, settotalsugar] = React.useState('');
    const [fructose, setfructose] = React.useState('');
    const [galactose, setgalactose] = React.useState('');
    const [glucose, setglucose] = React.useState('');
    const [lactose, setlactose] = React.useState('');
    const [sucrose, setsucrose] = React.useState('');
    const [addedsugar, setaddedsugar] = React.useState('');
    const [netcarbs, setnetcarbs] = React.useState('');
    ///-----lipids
    const [fat, setfat] = React.useState('');
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
    ////------vitaminas
    const [b1thiamine, setb1thiamine] = React.useState('');
    const [b2riboflavin, setb2riboflavin] = React.useState('');
    const [b3niacin, setb3niacin] = React.useState('');
    const [b5pantothenicacid, setb5pantothenicacid] = React.useState('');
    const [b6pyridoxine, setb6pyridoxine] = React.useState('');
    const [b12cobalamin, setb12cobalamin] = React.useState('');
    const [folate, setfolate] = React.useState('');
    const [vitamina, setvitamina] = React.useState('');
    const [vitaminc, setvitaminc] = React.useState('');
    const [vitamine, setvitamine] = React.useState('');
    const [vitamink, setvitamink] = React.useState('');
    //------minerals
    const [calcium, setcalcium] = React.useState('');
    const [copper, setcopper] = React.useState('');
    const [iron, setiron] = React.useState('');
    const [magnesium, setmagnesium] = React.useState('');
    const [manganese, setmanganese] = React.useState('');
    const [phosphorus, setphosphorus] = React.useState('');
    const [potassium, setpotassium] = React.useState('');
    const [selenium, setselenium] = React.useState('');
    const [sodium, setsodium] = React.useState('');
    const [zinc, setzinc] = React.useState('');
  


    const{
        createFactToPurchase,
        setOpenModalFact

    } = React.useContext(FactContext)



    const onCancelFact = () =>{
        setOpenModalFact(false)

    }
    const onSubmitFact = (event) =>{
     
        event.preventDefault();
        const lastfactupdate ={
            itemnutrientname, grams,
            //---carbs
            totalcarbs,
            fiber,
            starch, 
            totalsugar,
                fructose,
                galactose,
                glucose,
                lactose,
                sucrose,
            addedsugar,
            netcarbs,
            //---lipids
            fat,
                monounsaturated,
                polyunsaturated,
                    omega3,
                    omega6,
                saturated,
            //---proteins
            protein,
                cystine,
                histidine,
                isoleucine,
                leucine,
                lysine,
                methionine,
                phenylalanine,
                threonine,
                tryptophan,
                tyrosine,
                valine,
            //---vitamins
            b1thiamine,
            b2riboflavin,
            b3niacin,
            b5pantothenicacid,
            b6pyridoxine,
            b12cobalamin,
            folate,
            vitamina,
            vitaminc,
            vitamine,
            vitamink,
            //------minerals
            calcium,
            copper,
            iron,
            magnesium,
            manganese,
            phosphorus,
            potassium,
            selenium,
            sodium,
            zinc
        }
        console.log(lastfactupdate);

        setNewFactValue(lastfactupdate)

        createFactToPurchase(
            itemnutrientname, grams,
                //---carbs
            totalcarbs,
            fiber,
            starch, 
            totalsugar,
                fructose,
                galactose,
                glucose,
                lactose,
                sucrose,
            addedsugar,
            netcarbs,
            //---lipids
            fat,
                monounsaturated,
                polyunsaturated,
                    omega3,
                    omega6,
                saturated,
            //---proteins
            protein,
                cystine,
                histidine,
                isoleucine,
                leucine,
                lysine,
                methionine,
                phenylalanine,
                threonine,
                tryptophan,
                tyrosine,
                valine,
            //---vitamins
            b1thiamine,
            b2riboflavin,
            b3niacin,
            b5pantothenicacid,
            b6pyridoxine,
            b12cobalamin,
            folate,
            vitamina,
            vitaminc,
            vitamine,
            vitamink,
            //------minerals
            calcium,
            copper,
            iron,
            magnesium,
            manganese,
            phosphorus,
            potassium,
            selenium,
            sodium,
            zinc
        );
        console.log('el valor es ' + newFactValue)
        setOpenModalFact(false);

    
    }


    return(
        <form
            className="Form-To-Add--Fact-Nutrition"
            onSubmit={onSubmitFact}>
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
            <div
            className="Big-Fact-Form-Container"
            >
                {/* ///-------------------carbs------------------------ */}
                <div 
                    className="Form-Carbohidrates Macro"
                >
                    <h2>Carboidratos</h2>
                    <label htmlFor="totalcarbs">Total de Carboidratos</label>
                    <input
                        id="totalcarbs"
                        placeholder="200g o 300g"
                        onChange={(e) => settotalcarbs(e.target.value)}
                        type="number"
                        name={totalcarbs}

                    ></input>
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
                    <label htmlFor="totalsugar">Total de Azucar</label>
                    <input
                        id="totalsugar"
                        placeholder="200g o 300g"
                        onChange={(e) => settotalsugar(e.target.value)}
                        type="number"
                        name={totalsugar}
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
                    <label htmlFor="addedsugar">Azúcares Añadidos</label>
                    <input
                        id="addedsugar"
                        placeholder="200g o 300g"
                        onChange={(e) => setaddedsugar(e.target.value)}
                        type="number"
                        name={addedsugar}

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
                    <label htmlFor="fat">Total de Grasas</label>
                    <input
                        id="fat"
                        placeholder="200g o 300g"
                        onChange={(e) => setfat(e.target.value)}
                        type="number"
                        name={fat}

                    ></input>
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
                        <h3>Polinsaturada</h3>
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
                {/* ////----------------------Vitaminas---------------------- */}
                <div 
                    className="Form-Vitamins Macro"
                >
                    <h2>Vitaminas</h2>
                    <div
                        className="Inner-Form-Vitamins"
                    >
                        
                        <label htmlFor="b1thiamine">B1 Tiamina</label>
                        <input
                            id="b1thiamine"
                            placeholder="mg"
                            onChange={(e) => setb1thiamine(e.target.value)}
                            type="number"
                            name={b1thiamine}

                        ></input>
                        <label htmlFor="b2riboflavin">B2 Riboflavina</label>
                        <input
                            id="b2riboflavin"
                            placeholder="mg"
                            onChange={(e) => setb2riboflavin(e.target.value)}
                            type="number"
                            name={b2riboflavin}

                        ></input>
                        <label htmlFor="b3niacin">B3 Niacina</label>
                        <input
                            id="b3niacin"
                            placeholder="mg"
                            onChange={(e) => setb3niacin(e.target.value)}
                            type="number"
                            name={b3niacin}

                        ></input>
                        <label htmlFor="b5pantothenicacid">B5 Ácido Pantoténico</label>
                        <input
                            id="b5pantothenicacid"
                            placeholder="mg"
                            onChange={(e) => setb5pantothenicacid(e.target.value)}
                            type="number"
                            name={b5pantothenicacid}

                        ></input>
                        <label htmlFor="b6pyridoxine">B6 Piridoxina</label>
                        <input
                            id="b6pyridoxine"
                            placeholder="mg"
                            onChange={(e) => setb6pyridoxine(e.target.value)}
                            type="number"
                            name={b6pyridoxine}

                        ></input>
                        <label htmlFor="b12cobalamin">B12 Cobalamina</label>
                        <input
                            id="b12cobalamin"
                            placeholder="mg"
                            onChange={(e) => setb12cobalamin(e.target.value)}
                            type="number"
                            name={b12cobalamin}

                        ></input>
                        <label htmlFor="folate">Folate</label>
                        <input
                            id="folate"
                            placeholder="mg"
                            onChange={(e) => setfolate(e.target.value)}
                            type="number"
                            name={folate}

                        ></input>
                        <label htmlFor="vitamina">Vitamina A</label>
                        <input
                            id="vitamina"
                            placeholder="mg"
                            onChange={(e) => setvitamina(e.target.value)}
                            type="number"
                            name={vitamina}

                        ></input>
                        <label htmlFor="vitaminc">Vitamin C</label>
                        <input
                            id="vitaminc"
                            placeholder="mg"
                            onChange={(e) => setvitaminc(e.target.value)}
                            type="number"
                            name={vitaminc}

                        ></input>
                        <label htmlFor="vitamine">Vitamin E</label>
                        <input
                            id="vitamine"
                            placeholder="mg"
                            onChange={(e) => setvitamine(e.target.value)}
                            type="number"
                            name={vitamine}

                        ></input>
                        <label htmlFor="vitamink">Vitamin K</label>
                        <input
                            id="vitamink"
                            placeholder="mg"
                            onChange={(e) => setvitamink(e.target.value)}
                            type="number"
                            name={vitamink}

                        ></input>
                    </div>
                    
                    
                </div>
                {/* ////----------------------Minerales---------------------- */}
                <div 
                    className="Form-Minerals Macro"
                >
                    <h2>Minerales</h2>
                    <div
                        className="Inner-Form-Minerals"
                    >
                        
                        <label htmlFor="calcium">Calcio</label>
                        <input
                            id="calcium"
                            placeholder="mg"
                            onChange={(e) => setcalcium(e.target.value)}
                            type="number"
                            name={calcium}

                        ></input>
                        <label htmlFor="copper">Cobre</label>
                        <input
                            id="copper"
                            placeholder="mg"
                            onChange={(e) => setcopper(e.target.value)}
                            type="number"
                            name={copper}

                        ></input>
                        <label htmlFor="iron">Hierro</label>
                        <input
                            id="iron"
                            placeholder="mg"
                            onChange={(e) => setiron(e.target.value)}
                            type="number"
                            name={iron}

                        ></input>
                        <label htmlFor="magnesium">Magnecio</label>
                        <input
                            id="magnesium"
                            placeholder="mg"
                            onChange={(e) => setmagnesium(e.target.value)}
                            type="number"
                            name={magnesium}

                        ></input>
                        <label htmlFor="manganese">Manganeso</label>
                        <input
                            id="manganese"
                            placeholder="mg"
                            onChange={(e) => setmanganese(e.target.value)}
                            type="number"
                            name={manganese}

                        ></input>
                        <label htmlFor="phosphorus">Fósforo</label>
                        <input
                            id="phosphorus"
                            placeholder="mg"
                            onChange={(e) => setphosphorus(e.target.value)}
                            type="number"
                            name={phosphorus}

                        ></input>
                        <label htmlFor="potassium">Potacio</label>
                        <input
                            id="potassium"
                            placeholder="mg"
                            onChange={(e) => setpotassium(e.target.value)}
                            type="number"
                            name={potassium}

                        ></input>
                        <label htmlFor="selenium">Selenio</label>
                        <input
                            id="selenium"
                            placeholder="mg"
                            onChange={(e) => setselenium(e.target.value)}
                            type="number"
                            name={selenium}

                        ></input>
                        <label htmlFor="sodium">Sodio</label>
                        <input
                            id="sodium"
                            placeholder="mg"
                            onChange={(e) => setsodium(e.target.value)}
                            type="number"
                            name={sodium}

                        ></input>
                        <label htmlFor="zinc">Zinc</label>
                        <input
                            id="zinc"
                            placeholder="mg"
                            onChange={(e) => setzinc(e.target.value)}
                            type="number"
                            name={zinc}

                        ></input>
                        <label htmlFor="vitamink">Vitamin K</label>
                        <input
                            id="vitamink"
                            placeholder="mg"
                            onChange={(e) => setvitamink(e.target.value)}
                            type="number"
                            name={vitamink}

                        ></input>
                    </div>
                    
                    
                </div>
            </div>
            {/* ///----------------------Submit---------------------- */}
            <div>
                <button
                    className="Form-button-Add-Fact"
                    type="submit"
                >
                    Añadir
                </button>
                <button
                    className="Form-button-Cancel-Fact"
                    type="button"
                    onClick={onCancelFact}
                >
                    Cancelar
                </button>
                
            </div>
        </form>
    );
    }
export {FactForm}