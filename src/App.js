//Import Libraries
import React, { useState } from 'react';
import WorkItem from './components/work/WorkItem';
//import ProjectItemList from './components/ProjectItemList';

//Import SVGs
import Github from './assets/svg/Github';
import LinkedIn from './assets/svg/LinkedIn';
import Document from './assets/svg/Document';
import LeftArrow from './assets/svg/LeftArrow';
import RightArrow from './assets/svg/RightArrow';

//Import PDFs
import Resume from './data/CliffordNg_Resume.pdf';

//Import Images
import GSITravel from './assets/images/gsitravel.png';
import FlappyShark from './assets/images/flappyshark.png';
import Coffeephile from './assets/images/coffeephile.png';
import CruzHacks from './assets/images/cruzhack.png';
import Mooflix from './assets/images/mooflix.png';
import HackDavis from './assets/images/hackdavis.png';
import RoseHack from './assets/images/rosehack.png';

//Import Desktop Images
// import GSITravelDesktop from './assets/images/gsitravel_desktop.png';
// import FlappySharkDesktop from './assets/images/flappyshark_desktop.png';
// import DecryptionDesktop from './assets/images/decryption_desktop.png';
// import CruzHacksDesktop from './assets/images/cruzhacks_desktop.png';
// import HackDavisDesktop from './assets/images/hackdavis_desktop.png';
// import RoseHackDesktop from './assets/images/rosehack_desktop.png';

//Import Stylesheets
import './stylesheets/main.scss';
//import { Link } from './assets/svg/Link';

const App = () => {
  const projects = {
    projectitems: [
      {
        id: 1,
        image: GSITravel,
        image_desktop: null,
        title: 'GSI Travel',
        weblink: 'http://www.gsitravel.com.my',
        gitlink: 'https://github.com/wenloong/gsitravel',
        tools: ['React.js', 'SCSS', 'JavaScript', 'Firebase'],
        description: 'GSI Travel a travel company based in Asia. I worked as a Software Engineer and my main focus was to redesign their website to attract more customers and create an easy GUI CRUD interface for the admins to use.'
      },
      {
        id: 2,
        image: Coffeephile,
        image_desktop: null,
        title: 'Coffeephile.',
        weblink: 'https://fierce-spire-33970.herokuapp.com/',
        gitlink: 'https://github.com/wenloong/coffeephile',
        tools: ['Ruby on Rails', 'HTML', 'SCSS', 'PostgreSQL'],
        description: 'Coffeephile aims to attract a community of coffee lovers to discuss and discover new recipes for their morning brew. We aim to be the first largest coffee database.'
      },
      {
        id: 3,
        image: RoseHack,
        image_desktop: null,
        title: 'RoseHack 2020 [Winner]',
        weblink: 'https://devpost.com/software/uclassroom',
        gitlink: 'https://github.com/wenloong/UClassRoom',
        tools: ['React.js', 'CSS', 'Google Cloud', 'Firebase', 'JavaScript'],
        description: 'Built with intent to aid students and professors. This will benefit hearing impaired students as well as students with social anxiety by connecting the students to the professor through a webapp that we developed.'
      },
      {
        id: 4,
        image: Mooflix,
        image_desktop: null,
        title: 'Mooflix',
        weblink: 'https://github.com/wenloong/mooflix',
        gitlink: 'https://github.com/wenloong/mooflix',
        tools: ['Next.js', 'SCSS', 'JavaScript', 'MongoDB', 'Apache Hadoop', 'Map Reduce', 'Raspberry Pi'],
        description: 'My senior design project for database systems at UC Riverside. I was tasked to make a database that streams movie from a Hadoop server. I implemented it as a full stack application for extra credit.'
      },
      {
        id: 5,
        image: HackDavis,
        image_desktop: null,
        title: 'HackDavis 2019',
        weblink: 'https://devpost.com/software/idogtify',
        gitlink: 'https://github.com/wenloong/dogtor-app',
        tools: ['React.js', 'CSS', 'Google Cloud', 'Firebase'],
        description: 'Idogtify aims to assist pet lovers to identify any health issues that might have arise in their furry friend. It also aims to assist individuals who are looking to get a pet by providing them the proper information.'
      },
      {
        id: 6,
        image: CruzHacks,
        image_desktop: null,
        title: 'CruzHacks 2019',
        weblink: 'https://devpost.com/software/hackerschedule-4srnp7',
        gitlink: 'https://github.com/SeijiEmery/hack-your-schedule',
        tools: ['React.js', 'CSS', 'JavaScript', 'MongoDB', 'Node', 'Express'],
        description: 'Hack Your Schedule is a productivity app made to assist professional and busy individuals. Nothing impressive but I love to leave it here to see how much I have progressed over the years.'
      },
      {
        id: 7,
        image: FlappyShark,
        image_desktop: null,
        title: 'Flappy Shark',
        weblink: 'https://github.com/wenloong/Flappy-Shark',
        gitlink: 'https://github.com/wenloong/Flappy-Shark',
        tools: ['Unity', 'C#'],
        description: 'A side project built as a fun experimentation on game development. Just a little insight into what I like to do during my downtime.'
      },
    ]
  }

  const [x, setX] = useState(0);
  const [margin, setMargin] = useState(0);
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  function resize() {
    windowWidth = window.innerWidth;
  }

  window.onresize = resize;

  const scrollLeft = () => {
    if (windowWidth >= 1224) {
      if (x === 0) {
        setX(-400 * (projects.projectitems.length - 6));
        setMargin(margin - 240);
      } else {
        setX(x + 400);
        setMargin(margin + 240);
      }
    } else {
      if (x === 0) {
        setX(-100 * (projects.projectitems.length - 1));
        setMargin(margin - 300);
      } else {
        setX(x + 100);
        setMargin(margin + 50);
      }
    }
  }

  const scrollRight = () => {
    if (windowWidth >= 1224) {
      if (x === -400 * (projects.projectitems.length - 6)) {
        setX(0)
        setMargin(0);
      } else {
        setX(x - 400);
        setMargin(margin - 240);
      }
    } else {
      if (x === -100 * (projects.projectitems.length - 1)) {
        setX(0)
        setMargin(0);
      } else {
        setX(x - 100);
        setMargin(margin - 50);
      }
      // (x === -100 * (projects.projectitems.length - 1) ? setX(0) : setX(x - 100))
    }
  }

  return (
    <div className="App">
      <div className="Profile__wrapper" style={windowWidth >= 1224 ? {height: `calc(${windowHeight}px - 160px)`} : {height: `calc(${windowHeight}px - 100px)`}}>
        <div className="Profile">
          <div className="Profile__outer">
          <div className="Profile__top">
            <div className="Profile__name">
              <p><span className="bold">Clifford</span> N.</p>
            </div>

            <div className="Profile__socials">
              <a href={ Resume } target="_blank" rel="noopener noreferrer" className="Profile__socials--resume">
                <Document/>
              </a>
              <a href="https://github.com/wenloong" target="_blank" rel="noopener noreferrer" className="Profile__socials--github">
                <Github/>
              </a>
              <a href="https://linkedin.com/in/cliffordng" target="_blank" rel="noopener noreferrer" className="Profile__socials--linkedin">
                <LinkedIn/>
              </a>
            </div>
          </div>
          <div className="Profile__desc">
            <p>
              I'm currently a senior at <span className="bold">University of California, Riverside </span>
              majoring in <span className="bold">Computer Science</span>. My strengths lies 
              in <span className="bold">Full Stack Development</span>. I'm currently looking for
              a full time position in Software Engineering.
            </p>
          </div>
        </div>
          </div>
        <div className="Work">
          <div className="Work__top">
            <div className="Work__header">
              <p>My Works</p>
            </div>
            <div className="Work__slider--buttons">
              <div onClick={scrollLeft} className="Work__slider--buttons-left">
                <LeftArrow/>
              </div>
              <div onClick={scrollRight} className="Work__slider--buttons-right">
                <RightArrow/>
              </div>
            </div>
          </div>
          
          <div className="Work__container">
            <div className="Work__container--inner">
                {projects.projectitems.map((project, index) => {
                  return (
                    <div key={index} className="Work__item" style={{transform: `translateX(calc(${x}% + ${margin}px))`, WebkitTransform: `translateX(calc(${x}% + ${margin}px))`}}>
                      <WorkItem work={project}/>
                    </div>
                  )
                })}
                {/* <WorkItem work={this.state.projectitems[0]}/>
                <WorkItem work={this.state.projectitems[1]}/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
      /* <div className="profile-wrapper">
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
            <a href={ Resume } target="_blank" rel="noopener noreferrer" class="resume-button">
              Résumé
            </a>
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
      </div> */
  );
}

export default App;