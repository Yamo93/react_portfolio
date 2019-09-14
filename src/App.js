import React, { Component } from "react";
import ParticlesContainer from './components/ParticlesContainer';
import { BrowserRouter } from 'react-router-dom';
import "./App.css";

class App extends Component {

  render() {
    return (
    <BrowserRouter>
    <>
    <ParticlesContainer />
    <div className="App">
      <h1>Test!</h1>
    </div>
    </>
    </BrowserRouter>
    );
  }

}

export default App;
