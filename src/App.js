//Import Libraries
import React, { Component } from 'react';
import Particles from 'react-particles-js';
import ProjectItem from './components/ProjectItem';
import ProjectItemInfo from './components/ProjectItemInfo';

//Import SVGs
import Github from './assets/svg/Github';
import LinkedIn from './assets/svg/LinkedIn';

//Import Images
import GSITravel from './assets/images/gsitravel.png';

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
  constructor(props) {
    super(props);
    this.state = { show: new Array(2).fill(false) };
  }

  isOpen = (index) => {
    var clone = Object.assign( {}, this.state.show );
    switch(clone[index]) {
      case false:
        clone[index] = true
        break;
      case true:
        clone[index] = false
        break;
    }
    this.setState({ show: clone });
  }

  state = {
    isOpen: [false,false,false]
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
            <ProjectItem test="1"/>
            <ProjectItem test="2"/>
            <div className="project-item">
              
              <div className="project-item">
                <img onClick={(e) => this.setState({ isOpen: true })} alt="placeholder" src={GSITravel}/>
              </div>

              <ProjectItemInfo isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen: false})}>
                <div className="project-title">
                  Just a test
                </div>
              </ProjectItemInfo>

            </div>

            <div className="project-item">
              
              <div className="project-item">
                <img onClick={(e) => this.setState({ isOpen: true })} alt="placeholder" src={GSITravel}/>
              </div>

              { this.state.show[0] && <ProjectItemInfo> Testing </ProjectItemInfo>}
              

            </div>

            <div className="project-item">
              <img alt="placeholder" src="http://www.pixeden.com/media/k2/galleries/754/001-businesscard-mockup-presentation-psd-free-resource.jpg"/>
            </div>
            <div className="project-item">
              <img alt="placeholder" src="http://www.pixeden.com/media/k2/galleries/640/001-business-card-cardboard-mockup-presentation-wall-free-psd.jpg"/>
            </div>
            <div className="project-item">
              <img alt="placeholder" src="http://www.graphicsfuel.com/wp-content/uploads/2015/11/branding-mockup-psd.jpg"/>
            </div>
            <div className="project-item">
              <img alt="placeholder" src="http://www.pixeden.com/media/k2/galleries/511/001-business-card-mockup-vol-22-box-brand-psd.jpg"/>
            </div>
            <div className="project-item">
              <img alt="placeholder" src="http://www.graphicsfuel.com/wp-content/uploads/2015/11/branding-mockup-psd.jpg"/>
            </div>
            <div className="project-item">
              <img alt="placeholder" src="http://www.pixeden.com/media/k2/galleries/511/001-business-card-mockup-vol-22-box-brand-psd.jpg"/>
            </div>
            <div className="project-item">
              <img alt="placeholder" src="http://www.pixeden.com/media/k2/galleries/754/001-businesscard-mockup-presentation-psd-free-resource.jpg"/>
            </div>
            <div className="project-item">
              <img alt="placeholder" src="http://www.pixeden.com/media/k2/galleries/640/001-business-card-cardboard-mockup-presentation-wall-free-psd.jpg"/>
            </div>
            <div className="project-item">
              <img alt="placeholder" src="http://www.pixeden.com/media/k2/galleries/754/001-businesscard-mockup-presentation-psd-free-resource.jpg"/>
            </div>
            <div className="project-item">
              <img alt="placeholder" src="http://www.pixeden.com/media/k2/galleries/640/001-business-card-cardboard-mockup-presentation-wall-free-psd.jpg"/>
            </div>
            <div className="project-item">
              <img alt="placeholder" src="http://www.graphicsfuel.com/wp-content/uploads/2015/11/branding-mockup-psd.jpg"/>
            </div>
            <div className="project-item">
              <img alt="placeholder" src="http://www.pixeden.com/media/k2/galleries/511/001-business-card-mockup-vol-22-box-brand-psd.jpg"/>
            </div>
          </div>

        </div>

        <Particles className="particle-background" params={ ParticleOption }/>
      </div>
    );
  }
}

