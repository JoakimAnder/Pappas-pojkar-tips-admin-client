import React, {useContext} from 'react';
import {StateContext} from "../../Main";
import useInput from "../../../hooks/useInput";
import useDateTimeInput from "../../../hooks/useDateTimeInput";

const EditMatch = props => {
    const {selected, dispatch} = useContext(StateContext);
    const match = selected.object;

    const [channel, channelBond] = useInput(match.channel);
    const [[date, time], [dateBond, timeBond], stringDate, epoch] = useDateTimeInput(match["date_time"])

    return (
        <div>
            <div>
                <label>ID:</label>
                <input disabled={true} value={match.id}/>
            </div>
            <div>
                <label>channel:</label>
                <input {...channelBond} />
            </div>

            <div>
                <label>date</label>
                <input {...dateBond} />
                <label>time</label>
                <input {...timeBond} />
            </div>

            <div>
                <label>question:</label>
                <button onClick={() => dispatch({type: "SELECT_OBJECT", payload:{object: match.question, tab: "question"}})}>
                    {`${match.question.id}. ${match.question.slogan}`}
                </button>
            </div>

            <div>
                <label>teams:</label>
                {match.teams.map((t,i) =>
                    <button
                        key={i}
                        onClick={() => dispatch({type: "SELECT_OBJECT", payload:{object: t, tab: "team"}})}
                    >
                        {`${t.id}. ${t.name}`}
                    </button>
                )}
            </div>
        </div>
    );
};

export default EditMatch;