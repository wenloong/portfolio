import React, { Component } from 'react';
import ProjectItemInfo from './ProjectItemInfo';

export default class ProjectItem extends Component {
   state = {
      isOpen: false
   }

   render() {
      return(
         <div className="project-item">
            <img onClick={(e) => this.setState({ isOpen: true })} alt={ this.props.projectitem.title } src={ this.props.projectitem.image }/>

            <ProjectItemInfo isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen: false})}>
               <div className="project-title">
                  <img alt={ this.props.projectitem.title } src= { this.props.projectitem.image }/>
                  <p>{this.props.projectitem.title}</p>
                  
                  {this.props.projectitem.tools.map(item => (
                     <p key={item}>{item}</p>
                  ))}      
               </div>
            </ProjectItemInfo>
         </div>
      )
   }
}