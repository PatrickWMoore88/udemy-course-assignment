import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import UserInput from "./Components/UserInput/UserInput";
import UserOutput from "./Components/UserOutput/UserOutput";

class App extends Component {
  state = {
    username: "Patrick Moore"
  };

  usernameChangeHandler = event => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.usernameChangeHandler}
          currentName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Patrick" />
      </div>
    );
  }
}

export default App;
