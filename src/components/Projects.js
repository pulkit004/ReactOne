import React, { Component } from 'react';
import ProjectItems from './ProjectItems';


class Projects extends Component {

  deleteProject(id) {
    this.props.onDelete(id);
  }
 
  render () {
    let projectItems; 
    if (this.props.projects) {
      projectItems = this.props.projects.map(
        project => {
          // console.log(project);
          return (
            <ProjectItems onDelete={this.deleteProject.bind(this)} project={project} key={project.id}/>
          ) 
        }
      )
    }
  
    console.log(this.props);
    return (
      // Here comes the templating
      <div className="Projects">
        <p className="text-center mt-3">{this.props.test}</p>  
        <p className="text-center mt-3">
        This is something coming from Projects to App!
        </p>
        {projectItems}      

      </div>
    );
  }
}

export default Projects;