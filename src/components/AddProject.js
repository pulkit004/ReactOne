import React, { Component } from 'react';
import uuid from 'uuid';
 	class AddProject extends Component {
    static defaultProps  = {
			categories: ['Web Design', 'Web Development']
		}
		
		handleSubmit(e) {
			if (this.refs.title.value === '') {
				alert('title is req');
			} else {
				this.setState({
					newProject: {
						id: uuid.v4(),
						title: this.refs.title.value,
						category: this.refs.category.value
					}}, function() {
						// console.log(this.state);
						this.props.addProject(this.state.newProject);
					})
			}
			e.preventDefault();
		}
    render() {
        let categoryOptions = this.props.categories.map(
					category => {
						return <option key={category} value={category}>
							{category}
						</option>
					}
        )
        return(
					// Templating
					<div>
						<h3>Add Project</h3>
						<form onSubmit={this.handleSubmit.bind(this)}>
							<div className="form-group">
								<label htmlFor="title">Title</label>
								<input type="text" ref="title" className="form-control"/>
							</div>
							<div className="form-group">
								<label htmlFor="category">Category</label>
								<select type="text" ref="category" className="form-control">
								{categoryOptions}
								</select>
							</div>
							<button className="btn btn-primary" type="submit">Submit</button>
						</form>
					</div>
        );
    }
 }

 export default AddProject;