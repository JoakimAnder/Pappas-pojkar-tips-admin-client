import React, { useReducer, useEffect } from "react";
import MyForm from "../MyForm"
import TabbableList from "../TabbableList"
import {reducer} from "../Reducers";
import * as actions from "../actions";

export const StateContext = React.createContext();

export default function Main() {
    const [state, dispatch] = useReducer(reducer, {
        selectedOperation: "new",
        selectedTab: "game",
        selectedObject: null,
        games: [],
        quizes: [],
        matches: [],
        questions: [],
        teams: [],
        tasks: [],
        isLoading: false
    });

   actions.setDispatch(dispatch);

    useEffect(() => {
        actions.getAll()
    }, []);

    return <div>
        <StateContext.Provider value={state}>
            <TabbableList />
            <hr/>
            <MyForm />
        </StateContext.Provider>
    </div>
}