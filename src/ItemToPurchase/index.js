import React from "react";
import './css/itemtopurchase.css'
import { FactContext } from "../FactContext";
 import {DeleteItemIcon} from "../Icons/DeleteItemIcon"
import {DeductItemIcon} from "../Icons/DeductItemIcon"
import {AddItemIcon} from "../Icons/AddItemIcon"
import {NutritionIcon} from "../Icons/NutritionIcon"


function ItemToPurchase(props){
    const [textClickedNutrientValue, settexClickedNutrientValue] = React.useState(props.text);
     const{ onMouseDownNutritionValue} = React.useContext(FactContext);
    

    const handleClick = (event) => {
        // Call your onClickNutrition function
        props.onClickNutrition(event);
        // Then call your onMouseDownNutritionValue function
        onMouseDownNutritionValue(event);

        settexClickedNutrientValue(event.target.value);
        console.log(textClickedNutrientValue)

       

    }
    
    // console.log(textClickedNutrientValueContext)
    
    // const onClickedNutrientValue =() =>{
    //     // setclickedNutrientValue(event === props.text);
    //     return(
    //         props.onClickNutrition
    //     );
    // }

    return (
        
            <article className="ItemToPurchase">
                
                <div
                    className="Container-Icon-Delete"
                    onClick={props.onDelete}
                > <DeleteItemIcon/></div>
                <p
                    className="Item-Category"
                    
                ><span>{props.itemcategory} </span></p>
                <figure>
                    <img alt={props.photo}/>
                </figure>

                <p
                    className="Item-Price"
                >COP <b>{"$" + props.price}</b><span>{props.measureunit + " " + props.measuretype}</span></p>
                <p
                    className="Item-Name"
                >{props.text}</p>


                <div className="Purchasebutton">
                    <button
                        className={`Icon Icon-LessItem ${props.added && 'Icon-LessItem-active'}`}
                        onClick={props.onDeduct}
                    >
                        <DeductItemIcon/>
                    </button>
                    <p 
                        className="Quantity-Items-Added"
                    >
                    {
                        props.defaultNumberOfItemsAdded
                    }
                    </p>
                    <button
                        className={`Icon Icon-PlussItem ${props.added && 'Icon-PlussItem-active'}`}
                        onClick={props.onAdded}
            

                    >
                        <AddItemIcon/>
                    </button>
                </div>
                <button 
                    className={`Nutributton ${props.clickedNutrition && 'Icon-Nutrition-active'}`}
                    onClick={handleClick}
                    value={textClickedNutrientValue}

                    onChange={onMouseDownNutritionValue}
                    ///dont forget to remove the /
                >
                    <NutritionIcon/>
                    {props.nutritionfacts}
                </button>
            </article>

        

    );
}
export {ItemToPurchase};