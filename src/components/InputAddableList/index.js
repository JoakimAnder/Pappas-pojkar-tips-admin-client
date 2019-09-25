import React from 'react';
import InputField from "../InputField";
import useInput from "../../hooks/useInput";
import InputListField from "../InputListField";

function InputAddableList({list=[], setList, label, placeholder}) {
    const [_, bond, reset] = useInput();

    function add() {
        setList([...list, reset()])
    }
    return (
        <div>
            {label && <label>{label}:</label>}
            <InputField
                placeholder={placeholder}
                bond={{...bond, onKeyPress: (e => e.charCode === 13 && add())}}
            >
                <button onClick={add}>+</button>
            </InputField>
            <InputListField
                list={list}
                mapping={(item, index) => <div key={index}>
                    {item}
                    <button onClick={() => setList(list.filter((_,j) => index !== j))}>X</button>
                </div>}
            />
        </div>
    );
}

export default InputAddableList;