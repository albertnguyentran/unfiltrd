import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import Start from './pages/start'



function App() {
  return (
    <Router>
      
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/start" component={Start} exact/>
      </Switch>
    </Router>
  )
}

export default App;
