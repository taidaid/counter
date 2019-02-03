import React from "react";

const Button = ({ increment, onClickFunction }) => {
	const handleClick = () => {
		onClickFunction(increment);
	};
	if (increment < 0) {
		return <button onClick={handleClick}>{increment}</button>;
	} else if (increment > 0) {
		return <button onClick={handleClick}>+{increment}</button>;
	} else {
		return <button onClick={handleClick}>Reset</button>;
	}
};

export default Button;
