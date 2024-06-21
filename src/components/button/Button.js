import React from 'react';

const Button = ({ type = 'button', onClick, children, className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-12 py-4 text-white rounded bg-Secondary2 text-Text font-poppins font-medium text-base ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
