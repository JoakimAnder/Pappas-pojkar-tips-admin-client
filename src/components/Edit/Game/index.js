import React, {useContext} from 'react';
import {ActionContext, StateContext} from "../../Main";
import useInput from "../../../hooks/useInput";
import useDateTimeInput from "../../../hooks/useDateTimeInput";
import InputField from "../../InputField";
import InputDateField from "../../InputDateField";
import InputListField from "../../InputListField";


const EditGame = () => {
    const {selected, dispatch} = useContext(StateContext);
    const {editGame} = useContext(ActionContext);
    let game = selected.object;

    const [name, nameBond] = useInput(game.name);
    const [_, [dateLockedBind, timeLockedBind], stringLockedDate] = useDateTimeInput(game.timeLockedDown);
    const [__, [dateEndedBind, timeEndedBind], stringEndedDate] = useDateTimeInput(game.timeEnded);


    function commit() {
        console.log(game)
        const newGame = {
            id: game.id,
            name,
            timeLockedDown: stringLockedDate(),
            timeEnded: stringEndedDate()
        };
        // editGame(newGame)
    }
    return (
        <div>
            <InputField label={"ID"} value={game.id} />
            <InputField label={"Name"} bond={nameBond} />
            <InputField label={"TimeStarted"} value={game.timeStarted} />

            <InputDateField label="TimeLockedDown" dateBond={dateLockedBind} timeBond={timeLockedBind} />
            <InputDateField label="TimeEnded" dateBond={dateEndedBind} timeBond={timeEndedBind} />

            <InputListField label="Quizes" list={game.quizes} onClick={q => dispatch({payload: {object: q, tab: "quiz"}, type: "SELECT_OBJECT"})} />

            <button onClick={commit}>commit</button>
        </div>
    );
};

export default EditGame;