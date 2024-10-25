import React from "react";
import { ListContext } from "../ListContext";
import './css/ListForm.css'
import '../App/Appvariables.css'

function ListFrom(){
    const [newListValue, setNewListValue] = React.useState({
        itemtext: "",
        price: "",
        measureunit: "",
        itemimage: "",
        itemcategory: ""
    })
    const [itemtext, setItemtext] = React.useState('');
    const [price, setItemprice] = React.useState('');
    const [measureunit, setItemmeasureunit] = React.useState('');
    const [measuretype, setItemmeasuretype] = React.useState('');
    const [itemimage, setItemimage] = React.useState('');
    const [itemcategory, setItemcategory] = React.useState('');

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
        const lastitemupdate ={itemtext, price, measureunit, measuretype, itemimage, itemcategory}
        console.log(lastitemupdate);
     

        setNewListValue(lastitemupdate)

        


        createItemToPurchase(itemtext, price, measureunit, measuretype, itemimage, itemcategory);
        console.log('el valor es ' + newListValue)
        setOpenModal(false);

    
    }
    // const onSubmit = (event) =>{
    //     event.preventDefault();
    //     createItemToPurchase(newListValue);
        
    // }

    return(
        <form
            className="Form-To-Add-Nutrition"
            onSubmit={onSubmit}
        >
            <h2>Añade tu Primer Alimento</h2>
            <label htmlFor="itemcategory">Qué categoria</label>
            <select
                    className="Category-Itemn-Input-Type"
                    placeholder="200g"
                    onChange={(e) => setItemcategory(e.target.value)}
                    type="text"
                    name={itemcategory}

                >   
                    <option value="" selected>Elige la Categoria</option>
                    <option value="Dulce" >Dulce</option>
                    <option value="Frutas">Frutas</option>
                    <option value="Verduras" >Verduras</option>
                    <option value="Legumbre">Legumbres</option>
                    <option value="Tuberculos" >Tubérculos</option>
                    <option value="Cereales" >Cereales</option>
                    <option value="Carnes">Carnes</option>
                </select>
            <label htmlFor="itemtext">Añade alimento</label>
            <input 
                placeholder="Pera, cebolla, etc..."
                onChange={(e) => setItemtext(e.target.value)}
                type="text"
                name={itemtext}
            ></input>
            <label htmlFor="price">Añade el valor</label>
            <input
                placeholder="$5.000 o $6.000"
                onChange={(e) => setItemprice(e.target.value)}
                type="number"
                name={price}

            ></input>
            <label htmlFor="measureunit">Añade los gramos</label>
            <div
                className="Measure-Inputs-Section"
            >
            
                <input
                    className="Measure-Inputs-Unit"
                    placeholder="200g"
                    onChange={(e) => setItemmeasureunit(e.target.value)}
                    type="number"
                    name={measureunit}

                ></input>
                <select
                    className="Measure-Inputs-Type"
                    placeholder="200g"
                    onChange={(e) => setItemmeasuretype(e.target.value)}
                    type="number"
                    name={measuretype}

                >   
                    <option value="" selected>Elige la medida</option>
                    <option value="gr">gr</option>
                    <option value="mg" >mg</option>
                    <option value="lt">lt</option>
                    <option value="ml">ml</option>
                </select>
            </div>
            <label htmlFor="itemimage">Añade la imagen</label>
            <input
                className="Input-Upload-Image"
                alt="No se ha subido"
                title="Sube una imagen"
                placeholder=".jpg, jpeg o .png"
                onChange={(e) => setItemimage(e.target.value)}
                type="file"
                name={itemimage}

            ></input>
            <div>
                <button
                    className="Form-button-Add"
                    type="submit"
                >
                    Añadir
                </button>
                <button
                    className="Form-button-Cancel"
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>

            </div>
        </form>
    );
    }
export {ListFrom}