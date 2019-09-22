import React, { useReducer, useState, useEffect } from "react";
import MyForm from "../MyForm"
import TabbableList from "../TabbableList"
import {listReducer, selectReducer} from "../Reducers";
import * as nonActions from "../actions";
import SearchableList from "../SearchableList";

export const ListContext = React.createContext();
export const StateContext = React.createContext();
export const ActionContext = React.createContext();

export default function Main() {
    const [selected, dispatch] = useReducer(selectReducer, {
        type: "new",
        tab: "game",
        object: null
    });


    const [lists, listDispatch] = useReducer(listReducer, {
        games: [],
        quizes: [],
        matches: [],
        questions: [],
        teams: [],
        tasks: [],
        isLoading: false
    });

    // Initiate actions (ugly, I know..)
    const actions = Object.keys(nonActions).map(key => ({key: key, value: nonActions[key](listDispatch)}))
        .reduce((prev, curr, i) => {
            if(i === 1) {
                const o = {};
                o[prev.key] = prev.value;
                prev = o;
            }
            prev[curr.key] = curr.value;
            return prev;
        });

    useEffect(() => {
        actions.getAll()
    }, []);

    return <div>
        <button onClick={() => listDispatch({type:"SELECT_OBJECT"})} >test</button>
        <ActionContext.Provider value={{...actions}}>
        <StateContext.Provider value={{selected, dispatch}}>
        <ListContext.Provider value={[lists, listDispatch]}>
            <TabbableList />
            <hr/>
            <MyForm
                selected={selected}
            />
        </ListContext.Provider>
        </StateContext.Provider>
        </ActionContext.Provider>
    </div>
}