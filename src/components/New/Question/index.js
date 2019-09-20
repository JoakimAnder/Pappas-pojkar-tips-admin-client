import React, { useState } from 'react';
import {createQuestion} from "../../Dao";
import useInput from "../../../hooks/useInput";

const NewQuestion = props => {
    const [question, setQuestion] = useState({alternatives:[]});
    const [alt, setAlt] = useState("");
    const [slogan, sloganBind] = useInput();
    const [pointsCode, pointsCodeBind] = useInput();
    const [answerType, answerTypeBind] = useInput();

    function onSubmit(e) {
        e.preventDefault();

        createQuestion(question, question => {
            props.select({
                object: question,
                type: "edit",
                tab: "question"})
        })
    }
    function addAlt(){
        setQuestion({...question, alternatives: [...question.alternatives, alt]})
        setAlt("")
    }
    return (
        <div>
            <div>
                <label>slogan:</label>
                <input {...sloganBind} placeholder={"slogan"} />
            </div>

            <div>
                <label>alternatives:</label>
                {question.alternatives && question.alternatives.map((a,i) =>
                    <div key={i}>
                        {a}
                        <button onClick={() => setQuestion({...question, alternatives: question.alternatives.filter((_, i1) => i !== i1)})}>
                            X
                        </button>
                    </div>
                )}
                <input
                    name="alt"
                    value={alt}
                    placeholder={"Add alternative"}
                    onKeyPress={e => e.charCode === 13 && addAlt()}
                    onChange={e => {e.preventDefault(); setAlt(e.target.value)}}
                />
                <button onClick={addAlt}>+</button>
            </div>

            <div>
                <label>pointsCode:</label>
                <input {...pointsCodeBind} placeholder={"pointsCode"}/>
            </div>
            <div>
                <label>answerType:</label>
                <input {...answerTypeBind} placeholder={"answerType"} />
            </div>

            <button onClick={onSubmit}>Commit</button>

        </div>
    );
};

export default NewQuestion;