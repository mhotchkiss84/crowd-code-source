import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import ContentManager from '../../modules/ContentManager'

class FormJSX extends Component {

	state = {
		postName: "",
		description: "",
		category: "",
		loadingStatus: false
	}

	handleFieldChange = evt => {
		const stateToChange = {}
		stateToChange[evt.target.id] = evt.target.value
		this.setState(stateToChange)
	}

	constructNewPost = evt => {
		evt.preventDefault()
		if(this.state.postName === "" || this.state.description === "" || this.state.category === "" || this.state.category === "Select Category"){
			window.alert("Please fill out all fields")
		} else {
			this.setState({loadingStatus: true})
			let mappedId = ""
			this.props.categories.map((category) => {
				if(category.name === this.state.category){
					mappedId = category.id
				}
			})
			const post = {
				name: this.state.postName,
				categoryId: mappedId,
				description: this.state.description,
				userId: localStorage.userId,
				languageId: this.props.language.id,
				type: "function"
			}
			ContentManager.newPost(post).then(() =>
				this.props.refresh()
			)
		}
	}

	render() {
		if (this.props.toggle === true) {
			return (
				<Form onSubmit={this.constructNewPost}>
					<Form.Group>
						<Form.Label>Name</Form.Label>
						<Form.Control id="postName" onChange={this.handleFieldChange} type="text" placeholder="Enter function name" />
					</Form.Group>
					<Form.Group>
						<Form.Label>Category</Form.Label>
						<Form.Control id="category" onChange={this.handleFieldChange} as="select">
							<option>Select Category</option>
							{this.props.categories.map((category) => (
								<option>{category.name}</option>
							))}
						</Form.Control>
					</Form.Group>
					<Form.Group>
						<Form.Label>Description</Form.Label>
						<Form.Control id="description" onChange={this.handleFieldChange} type="text" placeholder="Description" />
					</Form.Group>

					<Button variant="primary" type="submit">
						Submit
					</Button>
					<Button variant="secondary" type="button" onClick={this.props.formToggle}>
						Cancel
					</Button>
				</Form>
			);
		} else {
			return <React.Fragment />;
		}
	}
}

export default FormJSX;
