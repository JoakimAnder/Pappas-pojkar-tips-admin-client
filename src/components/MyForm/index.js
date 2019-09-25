import React, {useState, useContext, useEffect} from "react";
import NewGame from "../New/Game";
import NewQuiz from "../New/Quiz";
import NewQuestion from "../New/Question";
import NewMatch from "../New/Match";
import NewTeam from "../New/Team";
import EditGame from "../Edit/Game";
import EditQuiz from "../Edit/Quiz";
import EditQuestion from "../Edit/Question";
import EditMatch from "../Edit/Match";
import EditTeam from "../Edit/Team";
import { StateContext } from "../Main";

export default function MyForm() {
    const { selectedOperation, selectedTab, selectedObject } = useContext(StateContext);
    const [form, setForm] = useState(parseForm());
    useEffect(()=>{
        setForm(parseForm())
    },[selectedObject])

    function parseForm  ()  {
        switch( selectedOperation ) {
            case "new":
                switch( selectedTab ) {
                    case "game": return <NewGame />;
                    case "quiz": return <NewQuiz />;
                    case "question": return <NewQuestion />;
                    case "match": return <NewMatch />;
                    case "team": return <NewTeam />;
                    default: throw Error("Your programmer is a dumdum!, No such tab")
                }


            case "edit":
                switch( selectedTab ) {
                    case "game": return <EditGame />;
                    case "quiz":return <EditQuiz />;
                    case "question":return <EditQuestion />;
                    case "match":return <EditMatch />;
                    case "team":return <EditTeam />;
                    default: throw Error("Your programmer is a dumdum!, No such tab")
                }

            default: throw Error("Your programmer is a dumdum!, No such operation")
        }
    }
    return <>
        {form}
    </>
}