import React, { Component } from 'react';
import '../stylesheets/Normalize.css';
import '../stylesheets/Home.css';

//Images
import profile from "../image/profile.jpg";

class Home extends Component {
   render() {
      return (
         <div className="home-wrapper">
            <div className="home-elements-wrapper">
               <div className="home-left-wrapper">
                  <div className="greeting-wrapper">
                     <h1>Bonjour!</h1>
                  </div>
                  <div className="profile-image-wrapper">
                     <img src={profile}></img>
                  </div>
               </div>

               <div className="home-right-wrapper">
                  <div className="desc-wrapper">
                     <p>My name is Clifford Ng. I am a Computer Science and
                        Engineering student with great interest in web development,
                        artificial intelligence, and machine learning.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Home;
