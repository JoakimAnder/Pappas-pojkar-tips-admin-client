import React, {useContext, useState} from 'react';
import {ActionContext, ListContext, StateContext} from "../../Main";
import useInput from "../../../hooks/useInput";
import SearchableList from "../../SearchableList";
import InputField from "../../InputField";

const EditTeam = props => {
    const {selected} = useContext(StateContext);
    const {editTeam} = useContext(ActionContext);
    const [{teams}] = useContext(ListContext);
    const team = selected.object;

    const [name, nameBond] = useInput(team.name);
    const [flag, flagBond] = useInput(team.flag);
    const [refTeam, setRef] = useState(team.refTeam);


    function commit() {
        console.log(team)
        const newTeam = {
            id: team.id,
            name, flag, refTeam
        }
        // editTeam(newTeam)
    }

    return (
        <div>
            <InputField label={"ID"} value={team.id} />
            <InputField label={"Name"} bond={nameBond} />
            <InputField label={"Flag"} bond={flagBond} />
            <div>
                <label>refTeam:</label>
                <SearchableList
                    list={teams.filter(t => t.id !== team.id)}
                    mapping={(t, i) =>
                        <button
                            key={i}
                            className={(refTeam && t.id === refTeam.id ? "selected": "")}
                            onClick={() => setRef((refTeam && t.id === refTeam.id ? null : t))}
                        >
                            {`${t.id}. ${t.name}`}
                        </button>}
                />
            </div>
            <button onClick={commit}>commit</button>
        </div>
    );
};

export default EditTeam;