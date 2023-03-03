import React from 'react';

const TextInput = (props) => {
    const { value, placeholder, disabled } = props;
    return (<span>
        <input type="text" value={value} placeholder={placeholder} disabled={disabled} />
    </span>)
}

export default TextInput;