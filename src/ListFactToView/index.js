import React from "react";


function ListFactToView(props){
    return (
        <section className="ListFactoView">
            <div>
                {props.children}
            </div>
        </section>

    );
}
export {ListFactToView};