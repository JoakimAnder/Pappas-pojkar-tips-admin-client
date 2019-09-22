import React, { useState, useContext } from 'react';
import {ActionContext, ListContext} from "../../Main";
import SearchableList from "../../SearchableList";
import useInput from "../../../hooks/useInput";
import InputField from "../../InputField";

const NewQuiz = () => {
    const [{games}] = useContext(ListContext);
    const {createQuiz} = useContext(ActionContext);
    const [name, nameBond] = useInput();
    const [game, setGame] = useState({});

    function onSubmit() {
        const quiz = {
            name, game
        }

        createQuiz(quiz)
    }
    return (
        <div>
            <InputField label={"Name"} bond={nameBond} />

            <div>
                <label>game:</label>
                <SearchableList
                    list={games}
                    mapping={(item, index) =>
                        <button
                            key={index}
                            onClick={() => setGame(item)}
                            className={(item.id === game.id ? "selected" : "")}
                        >
                            {`${item.id}. ${item.name}`}
                        </button>}
                />
            </div>
            <button onClick={onSubmit}>Commit</button>
        </div>
    );
};

export default NewQuiz;