import React, {useContext, useState} from 'react';
import {StateContext} from "../../Main";
import useInput from "../../../hooks/useInput";
import InputField from "../../InputField";
import SearchableList from "../../SearchableList";
import InputListField from "../../InputListField";
import {editQuiz, setObject} from "../../actions";

const EditQuiz = () => {
    const {selectedObject, games} = useContext(StateContext);

    const id = selectedObject.id;
    const questions = selectedObject.questions;
    const [name, nameBond] = useInput(selectedObject.name);
    const [game, setGame] = useState(selectedObject.game);


    function commit() {
        const newQuiz = {
            id, name, game
        }
        editQuiz(newQuiz)
    }

    return (
        <div>
            <InputField label={"ID"} value={id} />
            <InputField label={"Name"} bond={nameBond} />

            <SearchableList
                searchable={false}
                label="Questions"
                list={questions}
                onClick={q => setObject(q, "question")}
            />
            <SearchableList
                label="Game"
                list={games}
                selected={game}
                onClick={g => g.id === game.id ? setObject(g, "game") : setGame(g)}
            />
            <button onClick={commit}>commit</button>

        </div>
    );
};

export default EditQuiz;