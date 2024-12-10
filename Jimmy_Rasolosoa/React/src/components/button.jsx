import React from "react";

const Button = ({ handleClick, label }) => {
  return (
    <div>
      <button onClick={handleClick}>Click Me !</button>
      <p>{label}</p>
    </div>
  );
};

export default Button;
