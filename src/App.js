import React from 'react';

//Stylesheets
import './stylesheets/Normalize.css';

//Importing Components
import Navigation from './components/Navigation';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
    </div>
  );
}

export default App;
