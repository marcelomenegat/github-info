import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Main } from './components';
import './App.css';
import "./assets/css/sharedStyles.css";

class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" component={ Main } />
          <Route path="/:org" component={ Main } />
        </div>
      </Router>
    );
    
  }
  
}

export default App;
