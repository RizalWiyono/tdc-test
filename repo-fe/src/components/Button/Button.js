import React from 'react';

const Button = ({ onClick, title, type }) => {
    let buttonElement;

    if (type === "button") {
        buttonElement = (
            <button
                onClick={onClick}
                className="bg-[#222733] font-light hover:bg-transparent text-white hover:border-2 hover:border-[#222733] hover:text-[#222733] font-bold py-2 px-10 rounded-full"
            >
                {title}
            </button>
        );
    } else {
        buttonElement = (
            <button
                onClick={onClick}
                className="hover:bg-[#222733] font-light bg-transparent hover:text-white border-2 hover:border-2 border-[#222733] text-[#222733] font-bold py-2 px-10 rounded-full"
            >
                {title}
            </button>
        );
    }

    return buttonElement;
};

export default Button;
