import React, { Component } from 'react';
import ProjectItemInfo from './ProjectItemInfo';

import GSITravel from './../assets/images/gsitravel.png';

export default class ProjectItem extends Component {
   state = {
      isOpen: false
   }

   render() {
      return(
            <div className="project-item">
               <img onClick={(e) => this.setState({ isOpen: true })} alt="placeholder" src={GSITravel}/>

            <ProjectItemInfo isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen: false})}>
               <div className="project-title">
                  {this.props.test}
               </div>
            </ProjectItemInfo>
         </div>
      )
   }
}