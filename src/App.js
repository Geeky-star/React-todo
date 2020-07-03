import React, { Component } from 'react';
import Projects from './components/project.js'
import AddProject from './components/AddProject';
import {v4 as uuid} from 'uuid';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
    this.setState({projects: [
      {
        id: uuid(),
        title: "Business Website",
        category: "Web development"
      },
      {
        
        id: uuid(),
        title: "Social Website",
        category: "Social development"
      },
      {
        
        id: uuid(),
        title: "School Website",
        category: "School development"
      }
    ]});
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects});
  }

  
  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects: projects});
}
  render() {
    return (
    <div className="App">
      <AddProject addProject = {this.handleAddProject.bind(this)}/>
      <Projects projects = {this.state.projects} onDelete = {this.handleDeleteProject.bind(this)}/>
      </div>
  );
    }
}

export default App;
