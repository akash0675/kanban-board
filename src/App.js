import React, { Component } from 'react';
import Login from './modules/Login';
import Dashboard from './modules/Dashboard';
import Loader from './modules/Loader';
import { Route } from 'react-router-dom';

import './App.css';
import './../node_modules/antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Loader />
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </div>
    );
  }
}

export default App;
