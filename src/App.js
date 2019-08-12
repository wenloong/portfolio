import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Stylesheets
import './stylesheets/Normalize.css';

//Importing Components
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Route path="/Home" component={Home} />
        <Route path="/About" component={About}/>
      </div>
    </Router>
  );
}

export default App;
