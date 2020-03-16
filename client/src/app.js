import React, { Component } from 'react';
import {Route} from 'react-router-dom';
// import './App.css';
import NavBar from './components/NavBar';
// import Jtron from './components/Jumbotron';
import About from './components/About';
// import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="container">
         <Route path='/' component={NavBar}></Route>
         <Route exact path='/' component={About}></Route>
      </div>
    );
  }
}

export default App;