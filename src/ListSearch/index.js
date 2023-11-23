import React from "react";
import './css/listsearch.css'
import { ListContext } from "../ListContext";

function ListSearch(){
    const {searchValue, setStateSearch} = React.useContext(ListContext);
    const onSearchValue = (event) =>{
        console.log(event.target.value);
        setStateSearch(event.target.value)
    }
    return (
        <input
            className="ListSearch"
            placeholder="Buscar"
            value={searchValue}
            onChange={onSearchValue}
        />
        );
}
export {ListSearch};