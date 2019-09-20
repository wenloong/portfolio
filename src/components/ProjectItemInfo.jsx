import React, { Component } from 'react';

export default class ProjectItemInfo extends Component {
   render() {
      let projectItemInfo = (
         <div className={["project-item-info-wrapper", this.props.isOpen? 'visible' : 'notVisible'].join(' ')}>
            <button onClick={ this.props.onClose }>X</button>
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