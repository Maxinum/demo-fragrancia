import React from 'react';

const Select = ({ value }) => {

    const HandleChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <select
            style={{ width: 'fit-content' }}
            onChange={HandleChange}
            value={value}>
            <option>{value}</option>
            {/* {data.map((option, index) => {
                return <option key={index}>{option}</option>
            })} */}
        </select>
    );
}

export default Select;