import React, { useState, useContext } from 'react';
import {ActionContext, ListContext} from "../../Main";
import SearchableList from "../../SearchableList";
import useInput from "../../../hooks/useInput";
import InputField from "../../InputField";
import useDateTimeInput from "../../../hooks/useDateTimeInput";
import InputDateField from "../../InputDateField";

const NewMatch = props => {
    const [{quizes, teams}] = useContext(ListContext);
    const {createMatch} = useContext(ActionContext);

    const [name, nameBond] = useInput();
    const [_, [dateBind, timeBind], stringDate] = useDateTimeInput(new Date());
    const [pointsCode, pointsCodeBond] = useInput();
    const [channel, channelBond] = useInput();
    const [isTieable, setTie] = useState(true);
    const [matchTeams, setTeams] = useState([null, null]);
    const [quiz, setQuiz] = useState({});

    function onSubmit() {
        const match = {
            "date_time":stringDate(), name, quiz, pointsCode, channel, isTieable, teams: matchTeams
        };

        createMatch(match)
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
            <InputField label={"Name"} bond={nameBond} />

            {customSearchableList(0,q => setTeams([ q, matchTeams[1] ] ))}
            {customSearchableList(1,t => setTeams([ matchTeams[0], t ] ))}

            <InputField label={"Channel"} bond={channelBond} />
            <InputDateField dateBond={dateBind} timeBond={timeBind} />

            <SearchableList label="Quiz" list={quizes} onClick={q => setQuiz(q)} selected={quiz} />

            <InputField label="Is Tieable" bond={{
                defaultChecked: isTieable,
                onChange: e => setTie(e.target.checked),
                type: "checkbox"
            }} />

            <InputField label={"PointsCode"} bond={pointsCodeBond} />
            <button onClick={onSubmit}>Commit</button>
        </div>
    );
};

export default NewMatch;