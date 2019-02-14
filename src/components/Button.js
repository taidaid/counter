import React from "react";

const Button = ({ increment, onClickFunction, id }) => {
  const handleClick = () => {
    onClickFunction(increment);
  };

  if (increment < 0) {
    return <button onClick={handleClick}>{increment}</button>;
  } else if (increment > 0) {
    return <button onClick={handleClick}>+{increment}</button>;
  } else if (id === "result") {
    return <button onClick={onClickFunction}>Reset</button>;
  } else {
    return <button onClick={onClickFunction}>Save</button>;
  }
};

export default Button;
