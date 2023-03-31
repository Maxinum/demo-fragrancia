import React from 'react';

const Input = ({ value }) => {

    const HandleChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <input
            style={{ width: 'auto' }}
            onChange={HandleChange}
            value={value}
        />
    );
}

export default Input;