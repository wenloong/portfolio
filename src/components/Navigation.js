import React, { Component } from 'react';
import '../stylesheets/Normalize.css';
import '../stylesheets/Navigation.css';

class Navigation extends Component {
   render() {
      return (
         <div className="navigation-menu">
            <ul>
               <li><a href="#">Home</a></li>
               <li><a href="#">Projects</a></li>
               <li><a href="#">Skills</a></li>
               <li><a href="#">About</a></li>
            </ul>
         </div>
      )
   }
}

export default Navigation;
