import React, { Component } from 'react';
import TodoItems from './TodoItems';


class Todos extends Component {

  render () {
    let todoItems; 
    if (this.props.todos) {
      todoItems = this.props.todos.map(
        todo => {
          // console.log(project);
          return (
            <TodoItems todo={todo} key={todo.id}/>
          ) 
        }
      )
    }
  
    return (
      // Here comes the templating
      <div className="Todos">
        <p className="text-center mt-3">
        ToDo List
        </p>
        {todoItems}      

      </div>
    );
  }
}

export default Todos;