import React from "react";
import Button from "./components/Button";
import "./App.css";

const { useState } = React;

const App = () => {
	const [count, setCount] = useState(0);
	const [results, setResult] = useState([]);
	const incrementCount = increment => {
		setCount(count + increment);
	};
	const reset = () => {
		setCount(0);
	};
	const saveResult = result => {
		results.push(result);
		setResult(results);
	};

	//Add another button that saves the result of the count to a list of results.

	return (
		<div className="App">
			<Button increment={+1} onClickFunction={incrementCount} />
			<Button increment={+10} onClickFunction={incrementCount} />
			<Button increment={+100} onClickFunction={incrementCount} />
			<Button increment={+1000} onClickFunction={incrementCount} />
			<Button id="result" onClickFunction={reset} />
			<Button increment={-1} onClickFunction={incrementCount} />
			<Button increment={-10} onClickFunction={incrementCount} />
			<Button increment={-100} onClickFunction={incrementCount} />
			<Button increment={-1000} onClickFunction={incrementCount} />
			<Button id="save" onClickFunction={() => saveResult(count)} />
			<div>
				<strong>
					<em>Count: </em>
				</strong>
				{count}
			</div>
			<ul>
				<div>
					<strong>Results</strong>
				</div>
				{results.map(result => (
					<li>{result}</li>
				))}
			</ul>
		</div>
	);
};

export default App;
