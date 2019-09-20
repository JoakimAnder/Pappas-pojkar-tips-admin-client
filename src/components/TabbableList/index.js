import React, { useContext } from "react";
import SearchableList from "../SearchableList";
import {ListContext, StateContext} from "../Main";

const tabs = [
    "game", "quiz", "question", "match", "team"
];

export default function TabbableList(props) {
    const lists = useContext(ListContext);
    const {selected, dispatch} = useContext(StateContext);

    return <div>
        <div>
            {tabs.map((t, i) => {
                return <span key={i}><button
                    onClick={() => {
                        dispatch({type:"SET_TYPE",payload:"new"});
                        dispatch({type:"SET_TAB",payload:t});
                    }}
                    className={t === selected.tab ? "selected": ""}
                >
                    {t}
                </button></span>
            })}
        </div>
        <div>
            <button onClick={() => dispatch({type:"SET_TYPE",payload: "new"})} >New</button>

            <SearchableList
                list={lists[selected.tab]}
                filter={(query, item) => {
                    query = query.trim().toLowerCase();
                    if(query.length === 0)
                        return true;
                    if (!Number.isNaN(Number.parseInt(query)))
                        return item.id == query;
                    else {
                        if(selected.tab === "question")
                            return item.slogan.toLowerCase().includes(query);
                        else
                            return item.name.toLowerCase().includes(query);
                    }
                }}
                mapping={(item, index) =>
                    <button
                        key={index}
                        onClick={() => {
                            dispatch({payload: item, type: "SET_OBJECT"});
                            dispatch({type:"SET_TYPE", payload: "edit"});
                        }}
                    >
                        {`${item.id}. ${(selected.tab === "question" ? item.slogan : item.name)}`}
                    </button>}
            />


        </div>


    </div>
}