import React, { useState } from 'react';
import {createQuestion} from "../../Dao";

const NewQuestion = props => {
    const [question, setQuestion] = useState({alternatives:[]});
    const [alt, setAlt] = useState("");

    function onSubmit(e) {
        e.preventDefault();
        console.log("submited")

        createQuestion(question, question => {
            props.select({
                object: question,
                type: "edit",
                tab: "question"})
        })
    }
    function addAlt(){
        console.log("addAlt")
        setQuestion({...question, alternatives: [...question.alternatives, alt]})
        setAlt("")
    }
    return (
        <div>
            <input
                name={"slogan"}
                defaultValue={question.slogan}
                onChange={e => {e.preventDefault(); setQuestion({...question, slogan: e.target.value})}}
                placeholder={"slogan"}
                type={"text"} />

                {/*Alternatives*/}
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
            {/* End Alternatives*/}

            <input
                name={"pointsCode"}
                defaultValue={question.pointsCode}
                placeholder={"pointsCode"}
                onChange={e => {e.preventDefault(); setQuestion({...question, pointsCode: e.target.value})}}
                type={"text"} />
            <input
                name={"answerType"}
                defaultValue={question.answerType}
                placeholder={"answerType"}
                onChange={e => {e.preventDefault(); setQuestion({...question, answerType: e.target.value})}}
                type={"text"} />
            <button onClick={onSubmit}>Commit</button>

        </div>
    );
};

export default NewQuestion;