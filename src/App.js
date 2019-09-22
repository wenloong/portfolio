//Import Libraries
import React, { Component } from 'react';
import Particles from 'react-particles-js';
import ProjectItemList from './components/ProjectItemList';

//Import SVGs
import Github from './assets/svg/Github';
import LinkedIn from './assets/svg/LinkedIn';

//Import Images
import GSITravel from './assets/images/gsitravel.png';
import FlappyShark from './assets/images/flappyshark.png';
import Decryption from './assets/images/decryption.png';
import CruzHacks from './assets/images/cruzhack.png';
import HackDavis from './assets/images/hackdavis.png';

//Import Stylesheets
import './stylesheets/main.css';

const ParticleOption = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: false
      }
    },
    size: {
      value: 3.5,
      random: true,
      anim: {
        speed: 4,
        size_min: 0.1
      }
    },
    line_linked: {
      enable: false
    },
    move: {
      random: true,
      speed: 1

    }
  },
  interactivity: {
    detect_on: "canvas",
    resize: true,
    events: {
      onresize: {
        enable: true,
        density_auto: true,
        density_area: 400
      }
    }
  },
  retina_detect: true
}

export default class App extends Component {
  state = {
    projectitems: [
      {
        id: 1,
        image: GSITravel,
        title: 'GSI Travel',
        weblink: 'www.gsitravel.com.my',
        gitlink: 'https://github.com/wenloong/gsitravel',
        tools: ['React', 'CSS', 'JavaScript'],
        description: 'I developed a website for a travel agency company in Malaysia using the tools above to allow the owners to show their presense on the web. It’s main purpose is to allow customers an easy and pleasing user experience while browsing through the available tour packages that they offer. It also allows the customer to book a tour package online without growing through the hassle of calling or going to the office in person.'
      },
      {
        id: 2,
        image: FlappyShark,
        title: 'Flappy Shark',
        weblink: '',
        gitlink: 'https://github.com/wenloong/Flappy-Shark',
        tools: ['Unity', 'CSharp'],
        description: 'A Flappy Bird clone'
      },
      {
        id: 3,
        image: Decryption,
        title: 'Decryption Algorithm',
        weblink: '',
        gitlink: 'https://github.com/wenloong/CS111/tree/master/RSA%20Assignment',
        tools: ['Java'],
        description: ''
      },
      {
        id: 4,
        image: CruzHacks,
        title: 'CruzHacks 2019',
        weblink: 'https://devpost.com/software/hackerschedule-4srnp7',
        gitlink: 'https://github.com/SeijiEmery/hack-your-schedule',
        tools: ['React', 'CSS', 'JavaScript', 'MongoDB', 'Node', 'Express'],
        description: ''
      },
      {
        id: 5,
        image: HackDavis,
        title: 'HackDavis 2019',
        weblink: 'https://devpost.com/software/idogtify',
        gitlink: 'https://github.com/wenloong/dogtor-app',
        tools: ['React', 'CSS', 'GCP', 'Firebase'],
        description: 'Idogtify was built in a 2 days hackathon at UC Davis. It aim to assist owners in understanding common health issues that arises in their pet.'
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <div className="profile-wrapper">
          <div className="profile-info">
            <div className="profile-name">
              <p><span className="bold">CLIFFORD</span> NG</p>
            </div>
            <div className="profile-major">
              <p>Computer Science Major</p>
            </div>
            <div className="profile-tools">
              <div className="profile-tools-os">
                <p>Operating System: Manjaro Linux</p>
              </div>
              <div className="profile-tool-editor">
                <p>Code Editor: Visual Studio Code</p>
              </div>
            </div>
          </div>

          <div className="profile-links">
            <div className="profile-resume">
              <p>Résumé</p>
            </div>
            <div className="profile-social">
              <div className="github-wrapper">
                <a href="https://github.com/wenloong" target="_blank" rel="noopener noreferrer"><Github/></a>
              </div>
              <div className="linkedin-wrapper">
                <a href="https://www.linkedin.com/in/cliffordng/" target="_blank" rel="noopener noreferrer"><LinkedIn/></a>
              </div>
            </div>
          </div>
        </div>

        <div className="project-wrapper">
          <div className="project-item-wrapper">
            <ProjectItemList projectitems={ this.state.projectitems }/>
          </div>
        </div>

        <Particles className="particle-background" params={ ParticleOption }/>
      </div>
    );
  }
}

