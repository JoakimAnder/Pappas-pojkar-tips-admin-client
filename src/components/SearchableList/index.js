import React, { useState } from "react";
import useInput from "../../hooks/useInput"

export default function SearchableList({list, filter, mapping}) {
    filter = filter ? filter : (query, item) => {
        query = query.trim().toLowerCase();
        if(query.length === 0)
            return true;

        const intQuery = Number.parseInt(query);
        return (
            Number.isNaN(intQuery)
                ? item.name.toLowerCase().includes(query)
                : item.id === intQuery)
    }

    const [query, queryBond] = useInput();

    return <div>
        <div>
            <input {...queryBond} placeholder={"Search"}/>
        </div>
        {list
            .filter((item, index) => filter(query, item, index))
            .map(mapping)}
    </div>
}