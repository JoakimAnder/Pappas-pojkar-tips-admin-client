import React, { useState } from 'react';
import {createTeam} from "../../Dao";

const NewTeam = props => {
    const [team, setTeam] = useState({});

    function onSubmit(e) {
        e.preventDefault();

        createTeam(team, team => {
            props.select({object: team, type: "edit", tab: "team"})
        })
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                value={team.name}
                onChange={e => setTeam({...team, name: e.target.value})}
                placeholder={"name"}
                type={"text"} />
            <input
                value={team.flag}
                onChange={e => setTeam({...team, flag: e.target.value})}
                placeholder={"flag"}
                type={"text"} />
            <button type={"submit"} >Commit</button>
        </form>
    );
};

export default NewTeam;