import React, {useContext, useState} from 'react';
import {StateContext} from "../../Main";
import useInput from "../../../hooks/useInput";
import SearchableList from "../../SearchableList";
import InputField from "../../InputField";
import {editTeam} from "../../actions";

const EditTeam = () => {
    const {selectedObject, teams} = useContext(StateContext);

    const id = selectedObject.id;
    const [name, nameBond] = useInput(selectedObject.name);
    const [flag, flagBond] = useInput(selectedObject.flag);
    const [refTeam, setRef] = useState(selectedObject.refTeam);


    function commit() {
        const newTeam = {
            id, name, flag, refTeam
        }
        editTeam(newTeam)
    }

    return (
        <div>
            <InputField label={"ID"} value={id} />
            <InputField label={"Name"} bond={nameBond} />
            <InputField label={"Flag"} bond={flagBond} />
            <SearchableList
                label={"RefTeam"}
                list={teams.filter(t => t.id !== id)}
                selected={refTeam}
                onClick={t => setRef(refTeam && t.id === refTeam.id ? null : t)}
            />
            <button onClick={commit}>commit</button>
        </div>
    );
};

export default EditTeam;