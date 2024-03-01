import React from "react";


function ListFactToView(props){
    return (
        <section className="ListItemstoAdd">
            <div>
                {props.children}
            </div>
        </section>

    );
}
export {ListFactToView};