import React from 'react';
import useInput from "../../../hooks/useInput";
import InputField from "../../InputField";
import useDateTimeInput from "../../../hooks/useDateTimeInput";
import InputDateField from "../../InputDateField";
import {createGame} from "../../actions";


const NewGame = () => {
    const [name, nameBind] = useInput();
    const [, [dateBond, timeBond], stringDate] = useDateTimeInput(Date.now());

    function onSubmit() {
        const newGame = {
            name,
            timeLockedDown: stringDate()
        };
        createGame(newGame)
    }

    return (
        <div>
            <InputField label={"Name"} bond={nameBind} />
            <InputDateField label="TimeLockedDown" {...{dateBond, timeBond}} />
            <button onClick={onSubmit}>Commit</button>
        </div>
    );
};

export default NewGame;