import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import ContentManager from '../../modules/ContentManager'

class EditForm extends Component {
	state = {
		editPostTitle: '',
		editPostDescription: '',
		editPostCategory: '',
		loadingStatus: false
	};

	// Categories is just the id
	// postCategoryId={this.props.postCategoryId}
	// categories={this.props.categories}

	// this.props.categories.map((category) => {
	// 	if(category.name === this.state.category){
	// 		mappedId = category.id
	// 	}
	// })

	componentDidMount = () => {
		this.setState({ editPostTitle: this.props.postToEdit.title });
		this.setState({ editPostDescription: this.props.postToEdit.description });
		let categoryName = '';
		this.props.categories.map((category) => {
			if (category.id === this.props.postCategoryId) {
				categoryName = category.name;
			}
		});
		this.setState({ editPostCategory: categoryName });
	};

	handleFieldChange = (evt) => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	};

	updatePost = (evt) => {
		let editCategoryId = '';
		this.props.categories.map((category) => {
			if(category.name === this.state.editPostCategory){
				editCategoryId = category.id
			}
		})
		evt.preventDefault();
		this.setState({ loadingStatus: true });
		
		const editedPost = {
			id: this.props.postToEdit.id,
			name: this.state.editPostTitle,
			description: this.state.editPostDescription,
			categoryId: editCategoryId,
			type: "function",
			userId: localStorage.userId,
			languageId: this.props.languageId
		};

		ContentManager.update(editedPost).then(() => {
			this.props.toggleEditForm()
			this.props.refresh()
		});
	};

	

	render() {
		return (
			<Form onSubmit={this.updatePost}>
				<Form.Group>
					<Form.Label>Name</Form.Label>
					<Form.Control
						id="editPostTitle"
						// onChange={this.handleFieldChange}
						type="text"
						value={this.state.editPostTitle}
						onChange={this.handleFieldChange}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Category</Form.Label>
					<Form.Control id="editPostCategory" as="select" onChange={this.handleFieldChange}>
						<option>{`${this.state.editPostCategory}`}</option>
						{this.props.categories.map((category) => {
							if (category.name !== this.state.editPostCategory) {
								return <option>{category.name}</option>;
							}
						})}
						{/* {this.props.categories.map((category) => <option>{category.name}</option>)} */}
					</Form.Control>
				</Form.Group>
				<Form.Group>
					<Form.Label>Description</Form.Label>
					<Form.Control
						id="editPostDescription"
						// onChange={this.handleFieldChange}
						type="text"
						value={this.state.editPostDescription}
						onChange={this.handleFieldChange}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
				<Button variant="secondary" type="button" onClick={this.props.toggleEditForm}>
					Cancel
				</Button>
			</Form>
		);
	}
}

export default EditForm;
