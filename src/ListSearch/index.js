import React from "react";
import './css/listsearch.css'
import '../App/Appvariables.css'
import { ListContext } from "../ListContext";

function ListSearch(){
    const {searchValue, setStateSearch} = React.useContext(ListContext);
    const onSearchValue = (event) =>{
        console.log(event.target.value);
        setStateSearch(event.target.value)
        console.log(setStateSearch);
    }
    return (
        <input
            id="ListSearch"
            className="ListSearch"
            placeholder="Buscar"
            value={searchValue}
            onChange={onSearchValue}
        />
        );
}
export {ListSearch};