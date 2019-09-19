import React from 'react';

const EditMatch = props => {
    const match = props.selected.object;
    return (
        <div>
            <div>
                <p style={{display: "inline-block"}}>ID:</p>
                <input
                    disabled={true}
                    value={match.id}
                />
            </div>
            <div>
                <p style={{display: "inline-block"}}>channel:</p>
                <input
                    value={match.channel}
                />
            </div>

            <div>
                <p style={{display: "inline-block"}}>date_time:</p>
                <input
                    value={match["date_time"]}
                />
            </div>

            <div>
                <p style={{display: "inline-block"}}>question:</p>
                <button onClick={() => props.select({...props.selected, object: match.question, tab: "question"})}>
                    {`${match.question.id}. ${match.question.slogan}`}
                </button>
            </div>

            <div>
                <p style={{display: "inline-block"}}>teams:</p>
                {match.teams.map((t,i) => <button key={i}>{`${t.id}. ${t.name}`}</button>)}
            </div>

        </div>
    );
};

export default EditMatch;