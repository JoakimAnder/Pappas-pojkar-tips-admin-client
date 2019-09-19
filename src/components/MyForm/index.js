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
                    case "game": return <NewGame select={props.select} />
                    case "quiz": return <NewQuiz select={props.select} />
                    case "question": return <NewQuestion select={props.select} />
                    case "match": return <NewMatch select={props.select} />
                    case "team": return <NewTeam select={props.select} />
                }

                // return <New />

            case "edit":
                switch(props.selected.tab) {
                    case "game": return <EditGame select={props.select} selected={props.selected} />;
                    case "quiz":return <EditQuiz select={props.select} selected={props.selected} />;
                    case "question":return <EditQuestion select={props.select} selected={props.selected} />;
                    case "match":return <EditMatch select={props.select} selected={props.selected} />;
                    case "team":return <EditTeam select={props.select} selected={props.selected} />;
                }
        }
    }
    return <div>
        {parseForm()}
    </div>
}