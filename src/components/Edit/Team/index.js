import React, {useContext, useState} from 'react';
import {ListContext, StateContext} from "../../Main";
import useInput from "../../../hooks/useInput";
import SearchableList from "../../SearchableList";

const EditTeam = props => {
    const {selected} = useContext(StateContext);
    const lists = useContext(ListContext);
    const team = selected.object;
    const [name, nameBind] = useInput(team.name);
    const [flag, flagBind] = useInput(team.flag);
    const [refTeam, setRef] = useState(team.refTeam);


    return (
        <div>
            <div>
                <label>ID:</label>
                <input disabled={true} value={team.id}/>
            </div>
            <div>
                <label>name:</label>
                <input {...nameBind}/>
            </div>
            <div>
                <label>flag:</label>
                <input {...flagBind}/>
            </div>
            <div>
                <label>refTeam:</label>
                <SearchableList
                    list={lists.team.filter(t => t.id !== team.id)}
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
        </div>
    );
};

export default EditTeam;