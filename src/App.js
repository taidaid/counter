import React, { Component } from "react";
import Button from "./components/Button";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button increment={1} />
        <Button increment={10} />
        <Button increment={100} />
      </div>
    );
  }
}

export default App;
