import React, { useState, useContext } from 'react';
import useInput from "../../../hooks/useInput";
import InputField from "../../InputField";
import SearchableList from "../../SearchableList";
import InputAddableList from "../../InputAddableList";
import {StateContext} from "../../Main";
import {createQuestion} from "../../actions";

const NewQuestion = () => {
    const {quizes} = useContext(StateContext);

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

            <SearchableList
                label={"Quiz"}
                list={quizes}
                onClick={q => setQuiz(q)}
                selected={quiz}
            />

            <InputField label={"PointsCode"} bond={pointsCodeBond} />
            <InputField label={"AnswerType"} bond={answerTypeBond} />

            <button onClick={onSubmit}>Commit</button>

        </div>
    );
};

export default NewQuestion;