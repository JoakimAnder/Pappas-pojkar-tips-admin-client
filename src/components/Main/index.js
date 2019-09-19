import React, { useState } from "react";
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


export default function Main() {
    const [selected, select] = useState({
        type: "new",
        tab: "question",
        object: null
    })

    return <div>
        <TabbableList
            selected={selected}
            select={s => select({...selected, ...s})}
        />
        <hr/>
        <MyForm
            selected={selected}
            select={s => select({...selected, ...s})}
        />
    </div>
}