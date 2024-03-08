import React from "react";
import './css/itemtopurchase.css'
// import { FactContext } from "../FactContext";


function ItemToPurchase(props){
    
    // const onClickedNutrientValue =() =>{
    //     // setclickedNutrientValue(event === props.text);
    //     return(
    //         props.onClickNutrition
    //     );
    // }

    return (
       
            <article className="ItemToPurchase">
                <span
                    className="Icon-Delete"
                    onClick={props.onDelete}
                > x</span>
                <p>{props.text}</p>
                <p>COP ${props.price}</p>
                <figure>
                    <img alt={props.photo}/>
                </figure>
                <button
                    // className={`Nutributton ${props.clickedNutrition && 'Icon-LessItem-active'}`}
                    onClick={props.onClickNutrition}
                >
                    {props.nutritionfacts}
                </button>
                <div className="Purchasebutton">
                    <span
                        className={`Icon Icon-LessItem ${props.added && 'Icon-LessItem-active'}`}
                        onClick={props.onDeduct}
                    >-</span>
                    <p>
                    {
                        props.defaultNumberOfItemsAdded
                    }
                    </p>
                    <span
                        className={`Icon Icon-PlussItem ${props.added && 'Icon-PlussItem-active'}`}
                        onClick={props.onAdded}
                    >+</span>
                </div>
            </article>
        

    );
}
export {ItemToPurchase};