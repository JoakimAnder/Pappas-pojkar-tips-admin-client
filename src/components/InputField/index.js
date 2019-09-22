import React from 'react';

function InputField({children, placeholder, label, value , bond={disabled:true}}) {
    let inputBond = {
        placeholder: placeholder || label,
        value
    };
    inputBond = {...inputBond, ...bond};


    return <div>
        {label && <label>{label}:</label>}
        <input {...inputBond} />
        {children}
    </div>

}

export default InputField;