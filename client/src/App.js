import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hi!!!!!</h2>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a href="/auth/google">Sign in with Google</a>
          // <a href="/arlin.grijalba">Arlins fb page</a>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
