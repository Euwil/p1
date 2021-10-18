import React from "react";

const Logo = ({ className, textColor }) => {
  return (
    <p className={`logo ${className}`}>
      Web<span style={{ color: textColor }}>Studio</span>
    </p>
  );
};

export default Logo;
