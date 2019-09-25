import React from 'react';

function InputListField({label, list=[], mapping, filter=e=>true, onClick=e=>e, buttonLabel=q => `${q.id}. ${q.name}`}) {
    list = list.filter(filter);
    list = mapping ? list.map(mapping) : list.map((l,i)=><button key={i} onClick={() => onClick(l,i)}>{buttonLabel(l,i)}</button>);

    return (
        <div>
            {label && <label>{label}:</label>}
            {list}
        </div>
    );
}

export default InputListField;