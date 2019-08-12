import React, { Component } from 'react';
import { Link } from "react-router-dom";

import '../stylesheets/Normalize.css';
import '../stylesheets/Navigation.css';

class Navigation extends Component {
   render() {
      return (
         <div className="navigation-wrapper">
            <div className="navigation-menu">
               <div className="navigation-menu-ul-wrapper">
                  <ul>
                     <li><Link to={"/Home"}>Home</Link></li>
                     <li><Link to={"/#"}>Projects</Link></li>
                     <li><Link to={"/#"}>Skills</Link></li>
                     <li><Link to={"/About"}>About</Link></li>
                  </ul>
               </div>
            </div>
         </div>
      )
   }
}

export default Navigation;
