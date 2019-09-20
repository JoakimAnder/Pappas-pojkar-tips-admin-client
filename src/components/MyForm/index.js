import React from "react";
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

export default function MyForm(props) {
    function parseForm() {
        switch(props.selected.type) {
            case "new":
                switch(props.selected.tab) {
                    case "game": return <NewGame />;
                    case "quiz": return <NewQuiz select={props.select} />;
                    case "question": return <NewQuestion select={props.select} />;
                    case "match": return <NewMatch select={props.select} />;
                    case "team": return <NewTeam select={props.select} />;
                }

                // return <New />

            case "edit":
                switch(props.selected.tab) {
                    case "game": return <EditGame />;
                    case "quiz":return <EditQuiz />;
                    case "question":return <EditQuestion />;
                    case "match":return <EditMatch />;
                    case "team":return <EditTeam />;
                }
        }
    }
    return <div>
        {parseForm()}
    </div>
}