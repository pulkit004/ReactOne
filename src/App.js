import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import uuid from 'uuid';
import Todos from './components/Todos';

class App extends Component {
  constructor () {
    super();
    this.state = {
     projects: [],
     todos:[] 
    }
  }
  getToDos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({todos: data}, function(){
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    })
  }
  getProjects() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Business Inside',
          category: 'Business Development'
        },
        {
          id: uuid.v4(),
          title: 'Digit',
          category: 'All About Gadjets'
        }
      ]
    });
  }

  // LifeCycleMethod
  componentWillMount() {
    this.getProjects();
    this.getToDos();
  }

  componentDidMount() {
    this.getToDos();

  }

  handleAddProjects(project) {
    console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }
  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects: projects});
  }
  render() {
    return (
      <div className="myApp">
        <div className="jumbotron jumbotron-fl uid">
          <h1 className="text-center display-4">Dummy Project For React</h1>
        </div>
        <div className="container">
          <AddProject addProject={this.handleAddProjects.bind(this)}/>
          <Projects  test="This is something coming from App to Projects!" projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />

          <hr/>

          <Todos todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
