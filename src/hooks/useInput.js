import {useState} from "react";

export default function useInput(initValue="") {
    const [value, setValue] = useState(initValue);

    const bind = {
        value: value,
        onChange: e => setValue(e.target.value),
    }
    const reset = () => {
        const oldValue = value;
        setValue(initValue);
        return oldValue;
    }

    return [value, bind, reset];
}