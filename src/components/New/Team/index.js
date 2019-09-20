import React, { useState } from 'react';
import {createTeam} from "../../Dao";
import useInput from "../../../hooks/useInput";

const NewTeam = props => {
    const [name, nameBind] = useInput();
    const [flag, flagBind] = useInput();

    function onSubmit(e) {
        e.preventDefault();
        const team = {
            name, flag
        }

        createTeam(team, team => {
            props.select({object: team, type: "edit", tab: "team"})
        })
    }
    return (
        <div>
            <div>
                <label>name:</label>
                <input {...nameBind} placeholder={"name"}/>
            </div>
            <div>
                <label>flag:</label>
                <input {...flagBind} placeholder={"flag"}/>
            </div>
            <button onClick={onSubmit}>Commit</button>
        </div>
    );
};

export default NewTeam;