// components/InputField.js
import React from 'react';

const InputField = ({ type, title, value, onChange }) => {
    return (
        <input
            className="border-[1px] border-[#E2E2E2] rounded-full px-6 py-4 w-full"
            type={type || 'text'}
            placeholder={title}
            id={title}
            name={title}
            value={value}
            onChange={onChange}
        />
    );
};

export default InputField;
