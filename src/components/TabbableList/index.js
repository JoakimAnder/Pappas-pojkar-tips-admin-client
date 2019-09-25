import React, { useContext } from "react";
import SearchableList from "../SearchableList";
import {StateContext} from "../Main";
import {tabs} from "../Reducers";
import {setTab, setObject, setOperation, getAll} from "../actions";


export default function TabbableList() {
    const state = useContext(StateContext);
    const selectedTab = state.selectedTab;

    return <div>
        <SearchableList
            list={Object.keys(tabs)}
            isSelected={(item, selected) => item === selected}
            selected={selectedTab}
            buttonLabel={i => i}
            searchable={false}
            onClick={t => {
                if(t === selectedTab) {
                    getAll();
                } else {
                    setOperation("new");
                    setTab(t)
                }
            }}
        />

        <button onClick={() => setOperation("new")} className={(state.selectedOperation ==="new" ? "selected": "")}>New</button>

        <SearchableList
            list={state[tabs[selectedTab]]}
            onClick={item => setObject(item, selectedTab)}
            selected={state.selectedObject}
            isSelected={(item, selected) => item.id === selected.id}
        />
    </div>
}