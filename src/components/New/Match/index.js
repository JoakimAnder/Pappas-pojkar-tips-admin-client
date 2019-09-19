import React, { useState } from 'react';
import {createMatch} from "../../Dao";

const NewMatch = props => {
    const [match, setMatch] = useState({});

    function onSubmit(e) {
        e.preventDefault();

        createMatch(match, match => {
            props.select({object: match, tab: "match", type:"edit"})
        })
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                defaultValue={match.team1}
                onChange={e => setMatch({...match, team1: e.target.value})}
                placeholder={"team1Id"}
                type={"number"}
            />
            <input
                defaultValue={match.team2}
                onChange={e => setMatch({...match, team2: e.target.value})}
                placeholder={"team2Id"}
                type={"number"}
            />
            <input
                value={match.channel}
                onChange={e => setMatch({...match, channel: e.target.value})}
                placeholder={"channel"}
                type={"text"}
            />
            <input
                defaultValue={match["date_time"]}
                onChange={e => setMatch({...match, "date_time": e.target.value})}
                placeholder={"dateTime"}
                type={"number"}
            />
            <input
                defaultValue={match.quiz}
                onChange={e => setMatch({...match, quiz: e.target.value})}
                placeholder={"quizId"}
                type={"number"}
            />
            <label>isTieable</label><input
                defaultChecked={match.isTieable}
                onChange={e => setMatch({...match, isTiable: e.target.value})}
                placeholder={"isTieable"}
                type={"checkbox"}
        />
            <input
                placeholder={"pointsCode"}
                type={"text"}
            />
            <button type={"submit"} >Commit</button>
        </form>
    );
};

export default NewMatch;