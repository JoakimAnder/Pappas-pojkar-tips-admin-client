import React, {useContext, useState} from 'react';
import {StateContext} from "../../Main";
import useInput from "../../../hooks/useInput";
import SearchableList from "../../SearchableList";
import InputField from "../../InputField";
import InputAddableList from "../../InputAddableList";
import {editQuestion, setObject} from "../../actions";

const EditQuestion = () => {
    const {selectedObject, quizes} = useContext(StateContext);

    const id = selectedObject.id;
    const [slogan, sloganBond] = useInput(selectedObject.slogan);
    const [pointsCode, pointsCodeBond] = useInput(selectedObject.pointsCode);
    const [answerType, answerTypeBond] = useInput(selectedObject.answerType);
    const [alternatives, setAlts] = useState(selectedObject.alternatives);
    const [results, setResults] = useState(selectedObject.results);
    const [quiz, setQuiz] = useState(quizes.find(quiz => quiz.questions.some(q => q.id === id)));




    function commit() {
        const newQuestion = {
            id, slogan, pointsCode, answerType, alternatives, results, quiz
        };
        editQuestion(newQuestion)
    }


    return (
        <div>
            <InputField label={"ID"} value={id} />
            <InputField label={"slogan"} bond={sloganBond} />
            <InputField label={"pointsCode"} bond={pointsCodeBond} />
            <InputField label={"answerType"} bond={answerTypeBond} />

            <SearchableList
                label="Quiz"
                list={quizes}
                selected={quiz}
                onClick={q => q.id === quiz.id ? setObject(q, "quiz") : setQuiz(q) }
            />


            <InputAddableList list={alternatives} setList={setAlts} placeholder="Add Alternative" label="Alternatives" />
            <InputAddableList list={results} setList={setResults} placeholder="Add Result" label="Results" />

            <button onClick={commit}>commit</button>
        </div>
    );
};

export default EditQuestion;