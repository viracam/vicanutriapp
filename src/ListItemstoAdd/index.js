import React from "react";
import './css/listitemstoadd.css'

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