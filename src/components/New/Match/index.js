import React, { useState, useContext, useEffect } from 'react';
import {createMatch} from "../../Dao";
import {ListContext} from "../../Main";
import SearchableList from "../../SearchableList";
import useInput from "../../../hooks/useInput";

const NewMatch = props => {
    const len2 = x => {
        x = x+"";
        return (x.length < 2 ? "0"+x : x);
    }
    const lists = useContext(ListContext);

    const now = new Date();
    const y = now.getFullYear();
    const mo = now.getMonth()+1;
    const d = now.getDate();
    const h = now.getHours();
    const mi = now.getMinutes();

    const [date, dateBind] = useInput(`${len2(y)}-${len2(mo)}-${len2(d)}`);
    const [time, timeBind] = useInput(`${len2(h)}:${len2(mi)}`);
    const [pointsCode, pointsCodeBind] = useInput();
    const [channel, channelBind] = useInput();
    const [isTieable, isTieableBind] = useInput();
    const [teams, setTeams] = useState([{},{}]);
    const [quiz, setQuiz] = useState({});

    function onSubmit(e) {
        e.preventDefault();
        const match = {
            date, time, pointsCode, channel, isTieable, teams
        }

        createMatch(match, match => {
            props.select({object: match, tab: "match", type:"edit"})
        })
    }

    function customSearchableList(isSecond) {
        let thisIndex = Number(isSecond);
        let otherIndex = Number(!isSecond);
        let thisTeam = teams[thisIndex];
        let otherTeam = teams[otherIndex];

        return <div>
            <label>team {thisIndex+1}:</label>
            {thisTeam.id && <button
                onClick={() => {
                    const newTeams = [...teams];
                    newTeams[thisIndex] = {};
                    setTeams(newTeams)
                }}>{`${thisTeam.id}. ${thisTeam.name}`}</button>}
            <label>change:</label>
            <SearchableList
                list={lists.team.filter(t => t.id !== thisTeam.id && t.id !== otherTeam.id)}
                mapping={(item, index) =>
                    <button
                        key={index}
                        onClick={() => {
                            const newTeams = [...teams];
                            newTeams[thisIndex] = item;
                            setTeams(newTeams)
                        }}
                    >
                        {`${item.id}. ${item.name}`}
                    </button>}
            />
        </div>
    };


    return (
        <div>
            {customSearchableList(false)}
            {customSearchableList(true)}
            <div>
                <label>channel:</label>
                <input {...channelBind} placeholder={"channel"}/>
            </div>
            <div>
                <label>date:</label>
                <input {...dateBind} type={"date"}/>
                <label>time:</label>
                <input {...timeBind} type={"time"}/>
            </div>
            <div>
                <label>quiz:</label>
                <SearchableList
                    list={lists.quiz}
                    mapping={(item, index) =>
                        <button
                            key={index}
                            onClick={() => {
                                setQuiz(item)
                            }}
                            className={(item.id === quiz.id ? "selected" : "")}
                        >
                            {`${item.id}. ${item.name}`}
                        </button>}
                />
            </div>
            <div>
                <label>isTieable</label>
                <input
                    {...isTieableBind}
                    defaultChecked={isTieable}
                    placeholder={"isTieable"}
                    type={"checkbox"}
                />
            </div>
            <div>
                <label>pointsCode:</label>
                <input {...pointsCodeBind} placeholder={"pointsCode"}/>
            </div>
            <button onClick={onSubmit}>Commit</button>
        </div>
    );
};

export default NewMatch;