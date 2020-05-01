import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Ask from './components/Ask';
import NavBar from './components/Navbar';
import Jtron from './components/Jumbotron';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="container">
         <Route path='/' component={NavBar}></Route>
         <Route exact path='/' component={Jtron}></Route>
         <Route exact path='/' component={Hero}></Route>
         <Route exact path='/' component={Ask}></Route>
         <Route exact path='/' component={About}></Route>
         <Route exact path='/' component={Form}></Route>

      </div>
    );
  }
}

export default App;