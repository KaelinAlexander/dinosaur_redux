import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import './App.sass';

class App extends Component {
  
render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar />
        <section className="section">
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
              </Switch>
            </div>
          </section>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
