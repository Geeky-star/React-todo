import React, { Component } from 'react';

class ProjectItem extends Component {
  deleteProject(id){
    this.props.onDelete(id).bind(this, this.props.project.id);
  }
  render(){ 
      return (
    <div className="Project">
        <strong>{this.props.project.title}</strong> - {this.props.project.category}<a href =" " onClick = {this.deleteProject}>X</a>
      </div>
  );}
}

export default ProjectItem;
