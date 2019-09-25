import React, { useState, useContext } from 'react';
import SearchableList from "../../SearchableList";
import useInput from "../../../hooks/useInput";
import InputField from "../../InputField";
import {StateContext} from "../../Main";
import {createQuiz} from "../../actions";

const NewQuiz = () => {
    const {games} = useContext(StateContext);

    const [name, nameBond] = useInput();
    const [game, setGame] = useState({});

    function onSubmit() {
        const quiz = {
            name, game
        };

        createQuiz(quiz)
    }
    return (
        <div>
            <InputField label={"Name"} bond={nameBond} />

            <SearchableList
                label={"Game"}
                list={games}
                selected={game}
                onClick={g => setGame(g)}
            />

            <button onClick={onSubmit}>Commit</button>
        </div>
    );
};

export default NewQuiz;