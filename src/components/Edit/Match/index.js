import React, {useContext} from 'react';
import {ActionContext, StateContext} from "../../Main";
import useInput from "../../../hooks/useInput";
import useDateTimeInput from "../../../hooks/useDateTimeInput";
import InputField from "../../InputField";
import InputDateField from "../../InputDateField";
import InputListField from "../../InputListField";

const EditMatch = props => {
    const {selected, dispatch} = useContext(StateContext);
    const {editMatch} = useContext(ActionContext);
    const match = selected.object;

    const [name, nameBond] = useInput(match.name);
    const [channel, channelBond] = useInput(match.channel);
    const [__, [dateBond, timeBond], stringDate] = useDateTimeInput(match["date_time"]);


    function commit() {
        console.log(match)
        const newMatch = {
            name,
            id: match.id,
            channel,
            "date_time": stringDate()
        };
        // editMatch(newMatch)
    }
    return (
        <div>
            <InputField label={"ID"} value={match.id} />
            <InputField label={"Name"} bond={nameBond} />
            <InputField label={"Channel"} bond={channelBond} />

            <InputDateField dateBond={dateBond} timeBond={timeBond} />

            <InputListField
                label="Question"
                list={[match.question]}
                buttonLabel={q => `${q.id}. ${q.slogan}`}
                onClick={q => dispatch({type: "SELECT_OBJECT", payload:{object: q, tab: "question"}})}
            />

            <InputListField
                label="Teams"
                list={match.teams}
                onClick={t => dispatch({type: "SELECT_OBJECT", payload:{object: t, tab: "team"}})}
            />

            <button onClick={commit}>commit</button>
        </div>
    );
};

export default EditMatch;