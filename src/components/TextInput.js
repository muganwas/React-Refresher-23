import React from 'react';

const TextInput = ({ value, id, type, placeholder, disabled, onChange }) => {
    return (
        <span className='flex p-2'>
            <input type={type || "text"} id={id} value={value} placeholder={placeholder} disabled={disabled} onChange={onChange} />
        </span>
    )
};

export default TextInput;