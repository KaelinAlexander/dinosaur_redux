import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTrashAlt, faListAlt, faEdit } from '@fortawesome/free-regular-svg-icons'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Dinosaur from './components/Dinosaur'
import NewDinosaur from './components/NewDinosaur'
import EditDinosaur from './components/EditDinosaur'
import './App.sass';

library.add(fab, faEdit, faTrashAlt, faListAlt)

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
                <Route path="/dinosaurs/edit/:dinosaur_id" component={EditDinosaur} />
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
