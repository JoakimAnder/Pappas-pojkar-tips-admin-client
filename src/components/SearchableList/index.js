import React, { useState } from "react";

export default function SearchableList(props) {
    const [filteredList, setList] = useState(props.list);
    const filter = props.filter;
    const mapping = props.mapping;


    return <div>
        <div>
            <input
                type={"text"}
                onChange={e => setList(props.list.filter((item, index) => filter(e.target.value, item, index)))}
            />
        </div>
        {filteredList.map(mapping)}
    </div>
}