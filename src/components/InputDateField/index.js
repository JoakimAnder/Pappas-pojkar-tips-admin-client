import React from 'react';

function InputDateField({label, dateBond, timeBond}) {
    return (
        <div>
            {label && <label>{label}:</label>}
            <div>
                <label>date:</label>
                <input {...dateBond} />
                <label>time:</label>
                <input {...timeBond} />
            </div>
        </div>
    );
}

export default InputDateField;