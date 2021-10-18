import React from "react";

const Button = ({ className, children, type }) => {
  return (
    <button {...type} className={`button ${className}`}>
      {children}
    </button>
  );
};

export default Button;
