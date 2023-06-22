import React from "react";
import './css/listsearch.css'

function ListSearch({searchValue, setStateSearch}){
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