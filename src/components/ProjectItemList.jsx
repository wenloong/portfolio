import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

export default class ProjectItemList extends Component {
   render() {
      return this.props.projectitems.map((projectitem) => (
         <ProjectItem key={ projectitem.id } projectitem={ projectitem }/>
      ));
   }
}