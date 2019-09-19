import React, { useState } from 'react';
import {createGame} from "../../Dao";

const NewGame = props => {
    const [game, setGame] = useState({});
    function onSubmit(e) {
        e.preventDefault();

        createGame(game, game => {
            props.select({
                object: game,
                tab: "game",
                type: "edit"});
        })
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                name={"name"}
                placeholder={"name"}
                onChange={e => setGame({...game, name: e.target.value})}
                type={"text"}
            />
            <input
                name={"time"}
                defaultValue={game.timeLockedDown}
                placeholder={"time"}
                onChange={e => setGame({...game, timeLockedDown: e.target.value})}
                type={"number"}
            />
            <button type={"submit"} >Commit</button>
        </form>
    );
};

export default NewGame;