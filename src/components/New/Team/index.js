import React from 'react';
import useInput from "../../../hooks/useInput";
import InputField from "../../InputField";
import {createTeam} from "../../actions";

const NewTeam = () => {
    const [name, nameBind] = useInput();
    const [flag, flagBind] = useInput();

    function onSubmit() {
        const team = {
            name, flag
        };

        createTeam(team)
    }
    return (
        <div>
            <InputField label={"Name"} bond={nameBind} />
            <InputField label={"Flag"} bond={flagBind} />
            <button onClick={onSubmit}>Commit</button>
        </div>
    );
};

export default NewTeam;