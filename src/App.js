import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    userAccounts: []
  };

  componentDidMount() {
    fetch("https://coeusdevapi.azurewebsites.net/api/values")
      .then(res => res.json())
      .then(data => {
        this.setState({ userAccounts: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.userAccounts.map(ua => `${ua.username}, `)}</p>
          {/* Dummy comment. */}
        </header>
      </div>
    );
  }
}

export default App;
