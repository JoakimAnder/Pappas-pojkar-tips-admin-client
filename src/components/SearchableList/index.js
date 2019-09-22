import React, { useState } from "react";
import useInput from "../../hooks/useInput"

function defaultFilter(query, item) {
    query = query.trim().toLowerCase();
    if(query.length === 0)
        return true;

    const intQuery = Number.parseInt(query);
    return (
        Number.isNaN(intQuery)
            ? item.name.toLowerCase().includes(query)
            : item.id === intQuery)
}

export default function SearchableList({label, list=[], selected, onClick, filter=defaultFilter, mapping}) {
    const [query, queryBond] = useInput();

    function defaultMapping(item, index) {
        return <button
            key={index}
            onClick={() => onClick(item, index)}
            className={(selected && item.id === selected.id ? "selected" : "")}
        >
            {`${item.id}. ${item.name}`}
        </button>
    }

    list = list.filter((item, index) => filter(query, item, index));
    list = list.map(mapping ? mapping : defaultMapping);

    return (
        <div>
            {label && <label>{label}:</label>}
            <div>
                <input {...queryBond} placeholder={"Search"}/>
            </div>
            {list}
        </div>
    )
}