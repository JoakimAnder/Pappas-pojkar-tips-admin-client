import React from 'react';

const EditGame = (props) => {
    let game = props.selected.object;
    return (
        <div>

            <div>
                <p style={{display: "inline-block"}}>ID:</p>
                <input
                    disabled={true}
                    value={game.id}
                />
            </div>

            <div>
                <p style={{display: "inline-block"}}>Name:</p>
                <input
                    defaultValue={game.name}
                />
            </div>

            <div>
                <p style={{display: "inline-block"}}>timeStarted:</p>
                <input
                    disabled={true}
                    value={game.timeStarted}
                />
            </div>

            <div>
                <p style={{display: "inline-block"}}>TimeLockedDown:</p>
                <input
                    defaultValue={game.timeLockedDown}
                />
            </div>

            <div>
                <p style={{display: "inline-block"}}>timeEnded:</p>
                <input
                    defaultValue={game.timeEnded}
                />
            </div>

            <div>
                <p style={{display: "inline-block"}}>Quizes:</p>
                {game.quizes.map((q, i) =>
                    <button
                        key={i}
                        onClick={() => props.select({...props.selected, object: q, tab: "quiz"})}
                    >
                        {`${q.id}. ${q.name}`}
                    </button>
                )}
            </div>

        </div>
    );
};

export default EditGame;