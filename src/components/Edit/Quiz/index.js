import React from 'react';

const EditQuiz = props => {
    const quiz = props.selected.object;
    return (
        <div>

            <div>
                <p style={{display: "inline-block"}}>ID:</p>
                <input
                    value={quiz.id}
                />
            </div>

            <div>
                <p style={{display: "inline-block"}}>name:</p>
                <input
                    value={quiz.name}
                />
            </div>

            <div>
                <p style={{display: "inline-block"}}>questions:</p>
                {quiz.questions.map((q,i) =>
                    <button key={i} onClick={() => props.select({...props.selected, tab: "question", object: q})}>
                        {`${q.id}. ${q.slogan}`}
                    </button>)}
            </div>

            <div>
                <p style={{display: "inline-block"}}>game:</p>
                <button onClick={() => props.select({...props.selected, tab: "game", object: quiz.game})}>
                    {`${quiz.game.id}. ${quiz.game.name}`}
                </button>
            </div>

        </div>
    );
};

export default EditQuiz;