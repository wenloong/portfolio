import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/Normalize.css';
import '../stylesheets/Home.css';

//Images
import profile from "../image/profile.jpg";
import github from "../image/GitHub-Mark-120px-plus.png";
import linkedin from "../image/LinkedIn-Mark.png";

class Home extends Component {
   render() {
      return (
         <div className="home-wrapper">
            <div className="home-elements-wrapper">
               <div className="home-left-wrapper">
                  <div className="home-left-elements-wrapper">
                     <div className="greeting-wrapper">
                        <h1>Bonjour!</h1>
                     </div>
                     <div className="profile-image-wrapper">
                        <img src={profile} alt="Profile"></img>
                     </div>
                  </div>
               </div>

               <div className="home-right-wrapper">
                  <div className="desc-wrapper">
                     <p>My name is Clifford Ng. I am currently a Computer Science student at 
                        University of California, Riverside. I have a great interest in 
                        web development, artificial intelligence, and machine learning.
                     </p>
                  </div>
               </div>

               <div className="social-media-links">
                  <a target="_blank" href="https://github.com/wenloong"><img src={github} alt="Github Logo"></img></a>
                  <a target="_blank" href="https://github.com/wenloong"><img src={linkedin} alt="LinkedIn Logo"></img></a>
               </div>
            </div>
         </div>
      )
   }
}

export default Home;
