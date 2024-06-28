import React from "react";
import './css/listitemstoadd.css'
import '../App/Appvariables.css'
function ListItemstoAdd(props){
    return (
        <section className="ListItemstoAdd">
            <div>
                {props.children}
            </div>
        </section>

    );
}
export {ListItemstoAdd};