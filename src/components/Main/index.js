import React, { useState, useReducer } from "react";
import MyForm from "../MyForm"
import TabbableList from "../TabbableList"


const team1 = {
    id: 1,
    name: "Sweden",
    flag: "sFlag"

};
const team2 = {
    id: 2,
    name: "Norway",
    flag: "nFlag"
};
const question = {
    id: 1,
    slogan: "Sweden vs Norway",
    pointsCode: "5R5,1W-1",
    answerType: "5",
    quiz: null,
    alternatives: ["1","x","2"],
    results: []
};
const match = {
    id: 1,
    name: "Match 29",
    channel: "tv4",
    "date_time": 123654,
    question: question,
    teams: [team1, team2]
};
const game = {
    id: 1,
    name: "VM 2022",
    timeStarted: 0,
    timeLockedDown: 1,
    timeEnded: 2,
    quizes: []
};
const quiz = {
    id: 1,
    name: "ghostQuiz",
    questions: [question],
    game: game
};
question.quiz = quiz;
game.quizes.push(quiz);

const lists = {
    game: [game,game,game,game,game,game,game],
    quiz: [quiz,quiz,quiz,quiz,quiz,quiz,quiz],
    match: [match,match,match,match,match,match,match],
    question: [question,question,question,question,question,question],
    team: [team1,team2,team1,team2,team1,team2,team1]
}


const reducer = (state, action) => {
    switch(action.type) {
        case "SET_TYPE": return {...state, type: action.payload};
        case "SET_TAB": return {...state, tab: action.payload};
        case "SET_OBJECT": return {...state, object: action.payload};
        case "SELECT_OBJECT": return {...state, object: action.payload.object, tab: action.payload.tab};
        case "SET_ALL": return {...state, ...action.payload};
        default: return state;
    }
}

export const ListContext = React.createContext();
export const StateContext = React.createContext();

export default function Main() {
    const [selected, dispatch] = useReducer(reducer, {
        type: "new",
        tab: "team",
        object: quiz
    })



    return <div>
        <StateContext.Provider value={{selected, dispatch}}>
        <ListContext.Provider value={lists}>
            <TabbableList
                selected={selected}
            />
            <hr/>
            <MyForm
                selected={selected}
            />
        </ListContext.Provider>
        </StateContext.Provider>
    </div>
}