import React, { Component } from 'react';
import ProjectItemInfo from './ProjectItemInfo';

import ReactSVG from '../assets/svg/ReactSVG';
import CSS from '../assets/svg/CSS';
import JavaScript from '../assets/svg/Javascript';

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
         case 'JavaScript':
            return(<JavaScript/>);
         default:
            return null;
      }
  };

   render() {
      return(
         <div className="project-item">
            <img onClick={(e) => this.setState({ isOpen: true })} alt={ this.props.projectitem.title } src={ this.props.projectitem.image }/>

            <ProjectItemInfo isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen: false})}>
               <div className="project-item-info">
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
               </div>
            </ProjectItemInfo>
         </div>
      )
   }
}