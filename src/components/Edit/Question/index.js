import React, {useContext, useState} from 'react';
import {StateContext, ListContext, ActionContext} from "../../Main";
import useInput from "../../../hooks/useInput";
import SearchableList from "../../SearchableList";
import InputField from "../../InputField";
import InputAddableList from "../../InputAddableList";

const EditQuestion = props => {
    const {selected, dispatch} = useContext(StateContext);
    const [{quizes}] = useContext(ListContext);
    const {editQuestion} = useContext(ActionContext);
    const question = selected.object;

    const [slogan, sloganBond] = useInput(question.slogan);
    const [pointsCode, pointsCodeBond] = useInput(question.pointsCode);
    const [answerType, answerTypeBond] = useInput(question.answerType);
    const [alternatives, setAlts] = useState(question.alternatives);
    const [results, setResults] = useState(question.results);
    const [quiz, setQuiz] = useState(quizes.find(quiz => quiz.questions.some(q => q.id === question.id)));




    function commit() {
        console.log(question)
        const newQuestion = {
            id: question.id,
            slogan, pointsCode, answerType, alternatives, results, quiz
        }
        // editQuestion(newQuestion)
    }


    return (
        <div>
            <InputField label={"ID"} value={question.id} />
            <InputField label={"slogan"} bond={sloganBond} />
            <InputField label={"pointsCode"} bond={pointsCodeBond} />
            <InputField label={"answerType"} bond={answerTypeBond} />
            <div>
                <label>quiz:</label>
                <SearchableList
                    list={quizes}
                    mapping={(q, i) =>
                        <button
                            key={i}
                            className={(q.id === quiz.id ? "selected" : "")}
                            onClick={() => {
                                if(q.id === quiz.id) {
                                    dispatch({type: "SELECT_OBJECT", payload: {object: q, tab: "quiz"}})
                                } else {
                                    setQuiz(q)
                                }
                            }}
                        >
                            {`${q.id}. ${q.name}`}
                        </button>}
                />
            </div>


            <InputAddableList list={alternatives} setList={setAlts} placeholder="Add Alternative" label="Alternatives" />
            <InputAddableList list={results} setList={setResults} placeholder="Add Result" label="Results" />

            <button onClick={commit}>commit</button>
        </div>
    );
};

export default EditQuestion;