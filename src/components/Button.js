import React from "react";

const Button = ({ id, label, action }) => {
    return (
        <span className="flex p-2">
            <input id={id} value={label} onClick={action} type='button' />
        </span>
    )
};

export default Button;