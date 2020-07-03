import React, { Component } from 'react';
import {v4 as uuid} from 'uuid';

class AddProject extends Component {
    constructor(){
        super();
        this.state = {newProject: {}}
      }  
       
    static defaultProps = {categories: ['Web Design', 'Game Development', 'Graphics']}

    handleSubmit(e){
        if(this.refs.title.value === ''){
            alert("Title is Required");
        }
        else{
            this.setState({newProject:{
                id: uuid(),
                title: this.refs.title.value,
                category: this.refs.category.value
            }}, function(){
                this.props.addProject(this.newProject);
            });
            e.preventDefault();
        }
    }
  render(){
      let categoryoptions = this.props.categories.map(category => {
          return<option key = {category} value = "{category}"> {category}</option>})

  return (
    <div>
        <h3> Add Project </h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div> 
                <label>Title</label><br></br>
                <input type = "text" ref = "title"></input>
            </div>
            <div>
                <label>Category</label><br>
                </br>
                <select ref = "category">
                    {categoryoptions}
                </select>
            </div>
            <input type = "submit" value = "Submit"></input>
        </form>
      </div>
  );
}
}

export default AddProject;
