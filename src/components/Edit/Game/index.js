import React, { useContext } from 'react';
import { StateContext } from "../../Main";
import useInput from "../../../hooks/useInput";
import useDateTimeInput from "../../../hooks/useDateTimeInput";
import InputField from "../../InputField";
import InputDateField from "../../InputDateField";
import InputListField from "../../InputListField";
import {editGame, setObject} from "../../actions";


const EditGame = () => {
    const {selectedObject} = useContext(StateContext);

    const id = selectedObject.id;
    const quizes = selectedObject.quizes;
    const timeStarted = selectedObject.timeStarted;
    const [name, nameBond] = useInput(selectedObject.name);
    const [, [dateLockedBind, timeLockedBind], stringLockedDate] = useDateTimeInput(selectedObject.timeLockedDown);
    const [, [dateEndedBind, timeEndedBind], stringEndedDate] = useDateTimeInput(selectedObject.timeEnded);

    function commit() {
        const newGame = {
            id,
            name,
            timeLockedDown: stringLockedDate(),
            timeEnded: stringEndedDate()
        };
        editGame(newGame)
    }
    return (
        <div>
            <InputField label={"ID"} value={id} />
            <InputField label={"Name"} bond={nameBond} />
            <InputField label={"TimeStarted"} value={timeStarted} />

            <InputDateField label="TimeLockedDown" dateBond={dateLockedBind} timeBond={timeLockedBind} />
            <InputDateField label="TimeEnded" dateBond={dateEndedBind} timeBond={timeEndedBind} />

            <InputListField label="Quizes" list={quizes} onClick={q => setObject(q, "quiz")} />

            <button onClick={commit}>commit</button>
        </div>
    );
};

export default EditGame;