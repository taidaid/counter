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
		return <button onClick={handleClick}>Reset</button>;
	} else {
		return <button onClick={handleClick}>Save</button>;
	}
};

export default Button;
