import React from "react";
import useInput from "../../hooks/useInput"

function defaultFilter(query, item) {
    query = query.trim().toLowerCase();
    if(query.length === 0)
        return true;

    const intQuery = Number.parseInt(query);
    return (
        Number.isNaN(intQuery)
            ? (item.name && item.name.toLowerCase().includes(query)) || (item.slogan && item.slogan.toLowerCase().includes(query))
            : item.id === intQuery)
}

function defaultIsSelected(item, selected) {
    return item.id === selected.id;
}

export default function SearchableList({label, list=[], selected, isSelected=defaultIsSelected, onClick, filter=defaultFilter, mapping, buttonLabel, searchable=true}) {
    const [query, queryBond] = useInput();

    function defaultMapping(item, index) {
        return <button
            key={index}
            onClick={() => onClick(item, index)}
            className={(selected && isSelected(item, selected) ? "selected" : "")}
        >
            {buttonLabel ? buttonLabel(item, index) : `${item.id}. ${item.name || item.slogan}`}
        </button>
    }

    list = list.filter((item, index) => filter(query, item, index));
    list = list.map(mapping ? mapping : defaultMapping);

    return (
        <div>
            {label && <label>{label}:</label>}
            {searchable && <div>
                <input {...queryBond} placeholder={"Search"}/>
            </div>}
            {list}
        </div>
    )
}