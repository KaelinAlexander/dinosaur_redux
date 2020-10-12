import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './components/Home'

class App extends Component {
render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Dinosaurs!</h1>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
