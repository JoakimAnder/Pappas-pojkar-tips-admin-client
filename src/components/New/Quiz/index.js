import React, { useState, useContext } from 'react';
import {createQuiz} from "../../Dao";
import {ListContext} from "../../Main";
import SearchableList from "../../SearchableList";
import useInput from "../../../hooks/useInput";

const NewQuiz = props => {
    const lists = useContext(ListContext);
    const [name, nameBond] = useInput();
    const [game, setGame] = useState({});

    function onSubmit(e) {
        e.preventDefault();
        const quiz = {
            name, game
        }

        createQuiz(quiz, quiz => {
            props.select({object: quiz, type: "edit", tab: "quiz"})
        })
    }
    return (
        <div>
            <div>
                <label>name:</label>
                <input {...nameBond} placeholder={"name"}/>
            </div>
            <div>
                <label>game:</label>
                <SearchableList
                    list={lists.game}
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