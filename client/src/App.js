import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Jumbotron from "./components/layout/Jumbotron"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Jumbotron/>
      </div>
    );
  }
}

export default App;
