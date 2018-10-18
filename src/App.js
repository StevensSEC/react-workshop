import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";

class App extends Component {
  constructor(props) {
    super(props);

    // Initialize state
    this.state = {
      inputValue: ""
    };
  }

  inputElem = null; // Declare variable to hold ref

  componentDidMount() {
    // Focus input element after component renders
    this.inputElem.focus();
  }

  handleInput = event => {
    // Set state to value of input element
    this.setState({
      inputValue: event.currentTarget.value
    });
  };

  render() {
    return (
      <div className="App">
        <Header color={"red"}>
          <img src={logo} className="App-logo" alt="logo" />
        </Header>
        <input
          type="text"
          ref={inputRef => (this.inputElem = inputRef)}
          value={this.state.inputValue}
          onChange={this.handleInput}
        />
        <div>{this.state.inputValue}</div>
      </div>
    );
  }
}

export default App;
