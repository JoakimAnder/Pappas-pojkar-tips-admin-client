import React, {useContext} from 'react';
import {StateContext} from "../../Main";
import useInput from "../../../hooks/useInput";
import useDateTimeInput from "../../../hooks/useDateTimeInput";


const EditGame = () => {
    const {selected, dispatch} = useContext(StateContext);
    let game = selected.object;

    const [name, nameBind] = useInput(game.name);
    const [[dateLockedDown,timeLockedDown], [dateLockedBind, timeLockedBind], stringLockedDate, lockedEpoch] = useDateTimeInput(game.timeLockedDown);
    const [[dateEnded,timeEnded], [dateEndedBind, timeEndedBind], stringEndedDate, endedEpoch] = useDateTimeInput(game.timeEnded);

    return (
        <div>
            <div>
                <label>ID:</label>
                <input
                    disabled={true}
                    value={game.id}
                />
            </div>

            <div>
                <label>Name:</label>
                <input {...nameBind}/>
            </div>

            <div>
                <label>timeStarted:</label>
                <input disabled={true} value={game.timeStarted} />
            </div>

            <div>
                <label>timeLockedDown:</label>
                <div>
                    <label>date:</label>
                    <input {...dateLockedBind}/>
                    <label>time:</label>
                    <input {...timeLockedBind}/>
                </div>
            </div>

            <div>
                <label>timeEnded:</label>
                <div>
                    <label>date:</label>
                    <input {...dateEndedBind}/>
                    <label>time:</label>
                    <input {...timeEndedBind}/>
                </div>
            </div>

            <div>
                <label>Quizes:</label>
                {game.quizes.map((q, i) =>
                    <button
                        key={i}
                        onClick={() => dispatch({payload: {object: q, tab: "quiz"}, type: "SELECT_OBJECT"})}
                    >
                        {`${q.id}. ${q.name}`}
                    </button>
                )}
            </div>

        </div>
    );
};

export default EditGame;