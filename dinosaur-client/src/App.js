import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Dinosaur from './components/Dinosaur'
import NewDinosaur from './components/NewDinosaur'
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
                <Route path="/dinosaurs/new" component={NewDinosaur} />
                <Route path="/dinosaurs/:dinosaur_id" component={Dinosaur} />
              </Switch>
            </div>
          </section>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
