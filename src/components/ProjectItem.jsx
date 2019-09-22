//Import Libraries
import React, { Component } from 'react';
import { Slug }  from './Primitives';
import ProjectItemInfo from './ProjectItemInfo';

//Import SVGs
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
import { Link, NoLink } from '../assets/svg/Link';
import GithubDark from '../assets/svg/GithubDark';

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
      return(
         <div className="project-item">
            <img onClick={(e) => this.setState({ isOpen: true })} alt={ this.props.projectitem.title } src={ this.props.projectitem.image }/>

            <ProjectItemInfo isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen: false})}>
               <div className={"project-item-info"}>
                  <Slug delay={100}>
                     <img alt={ this.props.projectitem.title } src= { this.props.projectitem.image }/>
                     
                     <div className="project-item-info-row">
                        <p className="project-item-title">{ this.props.projectitem.title }</p>
                        <div className="project-item-links">
                           <a href={ this.props.projectitem.weblink } target="_blank" rel="noopener noreferrer">
                              { this.props.projectitem.weblink == null? <NoLink/> : <Link/> }
                           </a>
                           <a href={ this.props.projectitem.gitlink } target="_blank" rel="noopener noreferrer">
                              <GithubDark/>
                           </a>
                        </div>
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
               </div>
            </ProjectItemInfo>
         </div>
      )
   }
}