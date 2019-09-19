import React, { useState } from 'react';
import {createQuestion} from "../../Dao";

const NewQuestion = props => {
    const [question, setQuestion] = useState({alternatives:[]});
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
        let input = document.getElementById("addAltInput");
        setQuestion({...question, alternatives: [...question.alternatives, input.value]})
        input.value = "";
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                value={question.slogan}
                onChange={e => setQuestion({...question, slogan: e.target.value})}
                placeholder={"slogan"}
                type={"text"} />
            {question.alternatives && question.alternatives.map((a,i) =>
                <div key={i}>
                    {a}
                    <button onClick={() => setQuestion({...question, alternatives: question.alternatives.filter((_, i1) => i !== i1)})}>
                        X
                    </button>
                </div>
            )}
            <input
                id={"addAltInput"}
                placeholder={"Add alternative"}
            />
            <button onClick={addAlt}>+</button>
            <input
                value={question.pointsCode}
                placeholder={"pointsCode"}
                onChange={e => setQuestion({...question, pointsCode: e.target.value})}
                type={"text"} />
            <input
                value={question.answerType}
                placeholder={"answerType"}
                onChange={e => setQuestion({...question, answerType: e.target.value})}
                type={"text"} />
            <button type={"submit"} >Commit</button>
        </form>
    );
};

export default NewQuestion;