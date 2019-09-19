import React from 'react';

const EditQuestion = props => {
    const question = props.selected.object;
    return (
        <div>

            <div>
                <p style={{display: "inline-block"}}>ID:</p>
                <input
                    disabled={true}
                    value={question.id}
                />
            </div>

            <div>
                <p style={{display: "inline-block"}}>slogan:</p>
                <input
                    value={question.slogan}
                />
            </div>

            <div>
                <p style={{display: "inline-block"}}>pointsCode:</p>
                <input
                    value={question.pointsCode}
                />
            </div>

            <div>
                <p style={{display: "inline-block"}}>answerType:</p>
                <input
                    value={question.answerType}
                />
            </div>

            <div>
                <p style={{display: "inline-block"}}>quiz:</p>
                <button onClick={() => props.select({...props.selected, tab: "quiz", object: question.quiz})}>
                    {`${question.quiz.id}. ${question.quiz.name}`}
                </button>
            </div>

            <div>
                <p style={{display: "inline-block"}}>alternatives:</p>
                {question.alternatives.map((a,i) => <button key={i}>
                    {a}
                </button>)}
            </div>

            <div>
                <p style={{display: "inline-block"}}>results:</p>
                {question.results.map((r,i) => <button key={i}>
                    {r}
                </button>)}
            </div>

        </div>
    );
};

export default EditQuestion;