import React, { useState } from "react";

const tabs = [
    "game", "quiz", "question", "match", "team"
];

export default function TabbableList(props) {
    const [ search, setSearch ] = useState("");

    return <div>
        <div>
            {tabs.map((t, i) => {
                return <span key={i}><button
                    onClick={() => props.select({...props.selected, tab: t})}
                    className={t === props.selected.tab ? "selected": ""}
                >
                    {t}
                </button></span>
            })}
        </div>
        <div>
            <span>
                <input onChange={ e => setSearch(e.target.value) } placeholder={"Search"} value={search} />
                <button onClick={() => props.select({...props.selected, type: "new"})} >New</button>
            </span>


        </div>


    </div>
}