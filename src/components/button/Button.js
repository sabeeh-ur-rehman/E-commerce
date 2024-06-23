import React from 'react';

const Button = ({ type = 'button', onClick, children, className = '', style = {} }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-12 py-4 rounded font-poppins font-medium text-base ${className}`}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
