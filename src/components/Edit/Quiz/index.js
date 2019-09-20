import React, {useContext} from 'react';
import {StateContext} from "../../Main";
import useInput from "../../../hooks/useInput";

const EditQuiz = props => {
    const {selected, dispatch} = useContext(StateContext);
    const quiz = selected.object;

    const [name, nameBond] = useInput(quiz.name);

    return (
        <div>

            <div>
                <label>ID:</label>
                <input
                    disabled={true}
                    value={quiz.id}
                />
            </div>

            <div>
                <label>name:</label>
                <input {...nameBond} />
            </div>

            <div>
                <label>questions:</label>
                {quiz.questions.map((q,i) =>
                    <button
                        key={i}
                        onClick={() => dispatch({type: "SELECT_OBJECT",payload: {tab: "question", object: q}})}>
                        {`${q.id}. ${q.slogan}`}
                    </button>)}
            </div>

            <div>
                <label>game:</label>
                <button onClick={() => dispatch({type: "SELECT_OBJECT",payload: {tab: "question", object: quiz.game}})}>
                    {`${quiz.game.id}. ${quiz.game.name}`}
                </button>
            </div>

        </div>
    );
};

export default EditQuiz;