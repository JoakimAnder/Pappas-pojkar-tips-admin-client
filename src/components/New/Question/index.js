import React, { useState, useContext } from 'react';
import useInput from "../../../hooks/useInput";
import InputField from "../../InputField";
import {ActionContext, ListContext} from "../../Main";
import SearchableList from "../../SearchableList";
import InputAddableList from "../../InputAddableList";

const NewQuestion = props => {
    const {createQuestion} = useContext(ActionContext);
    const [{quizes}] = useContext(ListContext);

    const [slogan, sloganBond] = useInput();
    const [alternatives, setAlts] = useState([]);
    const [results, setResults] = useState([]);
    const [quiz, setQuiz] = useState({});
    const [pointsCode, pointsCodeBond] = useInput();
    const [answerType, answerTypeBond] = useInput();

    function onSubmit() {
        const question = {
            results,
            quiz,
            slogan,
            pointsCode,
            answerType,
            alternatives
        };

        createQuestion(question)
    }
    return (
        <div>
            <InputField label={"Slogan"} bond={sloganBond} />

            <InputAddableList list={alternatives} setList={setAlts} placeholder="Add Alternative" label="Alternatives" />
            <InputAddableList list={results} setList={setResults} placeholder="Add Result" label="Results" />

            <div>
                <label>quiz:</label>
                <SearchableList
                    list={quizes}
                    mapping={(item, index) =>
                        <button
                            key={index}
                            onClick={() => {
                                setQuiz(item)
                            }}
                            className={(item.id === quiz.id ? "selected" : "")}
                        >
                            {`${item.id}. ${item.name}`}
                        </button>}
                />
            </div>

            <InputField label={"PointsCode"} bond={pointsCodeBond} />
            <InputField label={"AnswerType"} bond={answerTypeBond} />

            <button onClick={onSubmit}>Commit</button>

        </div>
    );
};

export default NewQuestion;