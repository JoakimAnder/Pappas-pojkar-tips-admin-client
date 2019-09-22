import React, { useContext } from 'react';
import useInput from "../../../hooks/useInput";
import { ActionContext } from "../../Main";
import InputField from "../../InputField";
import useDateTimeInput from "../../../hooks/useDateTimeInput";
import InputDateField from "../../InputDateField";


const NewGame = () => {
    const {createGame} = useContext(ActionContext);
    const [name, nameBind] = useInput();
    const [_, [dateBond, timeBond], stringDate] = useDateTimeInput(Date.now());

    function onSubmit() {
        const newGame = {
            name,
            timeLockedDown: stringDate()
        }
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