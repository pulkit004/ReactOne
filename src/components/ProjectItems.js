import React, { Component } from 'react';
class ProjectItems extends Component {

    deleteProject(id) {
        console.log('test');
        this.props.onDelete(id);

    }

    render () {
      console.log(this.props);
      return (
        // Here comes the templating
        <ul className='list-group'>
            <li className="Project list-group-item mb-2">
                <div className="d-flex flex-row justify-content-between">
                    <div>
                        {this.props.project.title}
                    </div>
                    <div>
                        <button className="btn btn-sm btn-danger" onClick={this.deleteProject.bind(this, this.props.project.id)}>Delete</button>
                    </div>
                </div>
                    
            </li>        
        </ul>
      
      );
    }
  }
  export default ProjectItems;