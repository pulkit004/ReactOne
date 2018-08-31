import React, { Component } from 'react';
class TodoItems extends Component {

    render () {
      return (
        // Here comes the templating
        <ul className='list-group'>
            <li className="Project list-group-item mb-2">
                <div className="d-flex flex-row justify-content-between">
                    <div>
                        {this.props.todo.title}
                    </div>
                
                </div>
                    
            </li>        
        </ul>
      
      );
    }
  }
  export default TodoItems;