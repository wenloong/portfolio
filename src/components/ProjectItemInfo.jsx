import React, { Component } from 'react';

export default class ProjectItemInfo extends Component {
   render() {
      let projectItemInfo = (
         <div className="project-item-info">
            <button onClick={ this.props.onClose }>x</button>
            {this.props.children}
         </div>
      );

      if (!this.props.isOpen) {
         projectItemInfo = null;
      }

      return (
         <div>
            {projectItemInfo}
         </div>
      );
   }
}