import React, {useContext, useState} from 'react';
import {ActionContext, ListContext, StateContext} from "../../Main";
import useInput from "../../../hooks/useInput";
import InputField from "../../InputField";
import SearchableList from "../../SearchableList";
import InputListField from "../../InputListField";

const EditQuiz = props => {
    const {selected, dispatch} = useContext(StateContext);
    const [{games}] = useContext(ListContext);
    const {editQuiz} = useContext(ActionContext);
    const quiz = selected.object;

    const [name, nameBond] = useInput(quiz.name);
    const [game, setGame] = useState(quiz.game);

    //TODO setGame
    console.log(quiz)


    function commit() {
        console.log(quiz)
        const newQuiz = {
            id: quiz.id,
            name, game
        }
        // editQuiz(newQuiz)
    }

    return (
        <div>

            <InputField label={"ID"} value={quiz.id} />
            <InputField label={"Name"} bond={nameBond} />

            <InputListField
                label="Questions"
                list={quiz.questions}
                onClick={(q) => dispatch({type: "SELECT_OBJECT",payload: {tab: "question", object: q}})}
                buttonLabel={(q) => `${q.id}. ${q.slogan}`}
            />

            <div>
                <label>game:</label>
                <SearchableList
                    list={games}
                    mapping={(g,i) =>
                        <button
                            key={i}
                            className={(g.id === game.id? "selected":"")}
                            onClick={() => {
                                if(g.id === game.id)
                                    dispatch({type: "SELECT_OBJECT",payload: {tab: "game", object: quiz.game}})
                                else
                                    setGame(g)
                            }}
                        >
                            {`${g.id}. ${g.name}`}
                        </button>
                    }
                />
            </div>
            <button onClick={commit}>commit</button>

        </div>
    );
};

export default EditQuiz;