import React, {useContext, useState} from 'react';
import {StateContext} from "../../Main";
import useInput from "../../../hooks/useInput";
import useDateTimeInput from "../../../hooks/useDateTimeInput";
import InputField from "../../InputField";
import InputDateField from "../../InputDateField";
import InputListField from "../../InputListField";
import {editMatch, setObject} from "../../actions";
import SearchableList from "../../SearchableList";

const EditMatch = () => {
    const {selectedObject, teams} = useContext(StateContext);

    const id = selectedObject.id;
    const [name, nameBond] = useInput(selectedObject.name);
    const [channel, channelBond] = useInput(selectedObject.channel);
    const [, [dateBond, timeBond], stringDate] = useDateTimeInput(selectedObject["date_time"]);
    const question = selectedObject.question;
    const [matchTeams, setTeams] = useState(selectedObject.teams);



    function commit() {
        const newMatch = {
            id,
            name,
            channel,
            "date_time": stringDate(),
            teams: matchTeams
        };
        editMatch(newMatch)
    }
    const filteredTeams = teams.filter( t => !matchTeams.some( t2 => t2 && t.id === t2.id ) );
    function customSearchableList(teamIndex, onClick) {
        const team = matchTeams[teamIndex];
        return <div>
            <label>Team {teamIndex+1}:</label>
            {team && <button onClick={() => onClick(null)}>{`${team.id}. ${team.name}`}</button>}
            <SearchableList
                label="change"
                list={filteredTeams}
                onClick={onClick}
            />
        </div>
    }
    return (
        <div>
            <InputField label={"ID"} value={id} />
            <InputField label={"Name"} bond={nameBond} />
            <InputField label={"Channel"} bond={channelBond} />

            <InputDateField dateBond={dateBond} timeBond={timeBond} />

            <InputListField
                label="Question"
                list={[question]}
                onClick={q => setObject(q, "question")}
            />

            {customSearchableList(0,q => setTeams([ q, matchTeams[1] ] ))}
            {customSearchableList(1,t => setTeams([ matchTeams[0], t ] ))}

            <button onClick={commit}>commit</button>
        </div>
    );
};

export default EditMatch;