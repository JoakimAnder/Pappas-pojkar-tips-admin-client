import React, { useState, useContext } from 'react';
import {createGame} from "../../Dao";
import useInput from "../../../hooks/useInput";
import {StateContext} from "../../Main";

function log(x) {
    console.log(x);
    return x;
}
const NewGame = () => {
    const len2 = x => {
        x = x+"";
        return (x.length < 2 ? "0"+x : x);
    }
    const {selected, dispatch} = useContext(StateContext);
    const [name, nameBind] = useInput();

    const now = new Date();
    const y = now.getFullYear();
    const mo = now.getMonth()+1;
    const d = now.getDate();
    const h = now.getHours();
    const mi = now.getMinutes();

    const [date, dateBind] = useInput(`${len2(y)}-${len2(mo)}-${len2(d)}`);
    const [time, timeBind] = useInput(`${len2(h)}:${len2(mi)}`);

    function onSubmit() {
        const timeLockedDown =
            new Date(
                Date.parse(`${date}t${time}`)
                    .valueOf());
        createGame({name, timeLockedDown}, game => {
            dispatch({type: "SET_ALL", payload: {
                object: game,
                tab: "game",
                type: "edit"}});
        })
    }

    return (
        <div>
            <div>
                <label>name:</label>
                <input {...nameBind} placeholder={"name"}/>
            </div>

            <div>
                <label>timeLockedDown:</label>
                <div>
                    <label>date:</label>
                    <input {...dateBind} type={"date"} />
                    <label>time:</label>
                    <input {...timeBind} type={"time"} />
                </div>
            </div>
            <button onClick={onSubmit}>Commit</button>
        </div>
    );
};

export default NewGame;