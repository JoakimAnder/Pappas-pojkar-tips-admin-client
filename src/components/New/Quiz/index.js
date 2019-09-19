import React, { useState } from 'react';
import {createQuiz} from "../../Dao";

const NewQuiz = props => {
    const [quiz, setQuiz] = useState({});
    function onSubmit(e) {
        e.preventDefault();

        createQuiz(quiz, quiz => {
            props.select({object: quiz, type: "edit", tab: "quiz"})
        })
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                value={quiz.name}
                placeholder={"name"}
                type={"text"}
                onChange={e => setQuiz({...quiz, name: e.target.value})}
            />
            <input
                value={quiz.game}
                placeholder={"gameid"}
                type={"number"}
                onChange={e => setQuiz({...quiz, game: e.target.value})}
            />
            <button type={"submit"} >Commit</button>
        </form>
    );
};

export default NewQuiz;