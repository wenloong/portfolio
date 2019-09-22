import React, { Component } from 'react';
import { Slug, Fade }  from './Primitives';
import ProjectItemInfo from './ProjectItemInfo';

import ReactSVG from '../assets/svg/ReactSVG';
import CSS from '../assets/svg/CSS';
import CSharp from '../assets/svg/CSharp';
import JavaScript from '../assets/svg/Javascript';
import Java from '../assets/svg/Java';
import Node from '../assets/svg/Node';
import Express from '../assets/svg/Express';
import MongoDB from '../assets/svg/MongoDB';
import GCP from '../assets/svg/GCP';
import Firebase from '../assets/svg/Firebase';
import Unity from '../assets/svg/Unity';

export default class ProjectItem extends Component {
   state = {
      isOpen: false
   }

   selectSVG(svg) {
      switch(svg) {
         case 'React':
            return(<ReactSVG/>);
         case 'CSS':
            return(<CSS/>);
         case 'CSharp':
            return(<CSharp/>);
         case 'JavaScript':
            return(<JavaScript/>);
         case 'Java':
            return(<Java/>);
         case 'Node':
            return(<Node/>);
         case 'Express':
            return(<Express/>);
         case 'MongoDB':
            return(<MongoDB/>);
         case 'GCP':
            return(<GCP/>);
         case 'Firebase':
            return(<Firebase/>);
         case 'Unity':
            return(<Unity/>);
         default:
            return null;
      }
   };

   render() {
      const { isOpen } = this.state
      return(
         <div className="project-item">
            <img onClick={(e) => this.setState({ isOpen: true })} alt={ this.props.projectitem.title } src={ this.props.projectitem.image }/>

            <ProjectItemInfo isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen: false})}>
               <div className={"project-item-info"}>
                  <Fade show={isOpen} delay={isOpen? 500: 0}>
                  <Slug delay={100}>
                     <img alt={ this.props.projectitem.title } src= { this.props.projectitem.image }/>
                     
                     <div className="project-item-info-row">
                        <p className="project-item-title">{ this.props.projectitem.title }</p>
                        <p className="project-item-website">{ this.props.projectitem.weblink }</p>
                     </div>

                     <div className="project-item-tools">
                        <p className="project-item-heading">Tools Used</p>
                        
                        {this.props.projectitem.tools.map(item => (
                           <div className="project-item-tools-icon" key={ item }>
                              { this.selectSVG(item) }
                           </div>
                        ))} 
                     </div>

                     <div className="project-item-description">
                        <p className="project-item-heading">Description</p>
                        <p>{ this.props.projectitem.description }</p>
                     </div>
                  </Slug>
                  </Fade>
                  <Fade
                     show={!isOpen}
                     from={{ opacity: 0, transform: 'translate3d(0,140px,0)' }}
                     enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
                     leave={{ opacity: 0, transform: 'translate3d(0,-50px,0)' }}
                     delay={isOpen? 0 : 400}>
                     <div className="default">
                        <div style={{ zIndex: 1 }}>TEST</div>
                     </div>
                  </Fade>
               </div>
            </ProjectItemInfo>
         </div>
      )
   }
}