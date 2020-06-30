import React, { Component } from 'react';
import './MainContent.css';
import ReactDOM from 'react-dom';
import EditForm from './EditForm'

class MainContentCard extends Component {
	state = {
		showEditForm: false,
		postToEdit: {}
	};

	toggleEditForm = () => {
		if (this.state.showEditForm === false) {
			this.setState({ showEditForm: true });
			let postToEdit = this.buildPostToEdit();
			this.setState({ postToEdit: postToEdit });
		} else {
			this.setState({ showEditForm: false });
			this.clearRender()
		}
	};

	buildPostToEdit = () => {
		return {
			id: this.props.postId,
			title: this.props.postTitle,
			description: this.props.content,
			category: this.props.postCategory
		};
	};

	testRender() {
	return ReactDOM.render(
		<EditForm languageId={this.props.languageId} toggleEditForm={this.toggleEditForm} refresh={this.props.refresh} postCategoryId={this.props.postCategoryId} categories={this.props.categories} postToEdit={this.state.postToEdit}/>,
		document.getElementById('center-output')
	);
	}

	clearRender(){
		return ReactDOM.render(
			<p/>,
			document.getElementById('center-output')
		);
	}

	render() {
		let user = parseInt(localStorage.userId, 10);
		let showEdit = false;
		if (isNaN(user) === false) {
			if (user === this.props.userId) showEdit = true;
		}

		if(this.state.showEditForm === true){
			this.testRender()
		}

		return (
			<React.Fragment>
				<a id="post-heading" href="#">
					{this.props.postTitle}
				</a>
				<a href="#">{`Posted by ${this.props.userName}`}</a>
				<p id="post-content">
					{`${this.props.content}`}{' '}
					{showEdit ? (
						<a id={`edit-${this.props.postId}`} href="#" onClick={this.toggleEditForm}>
							Edit
						</a>
					) : (
						<p />
					)}
				</p>
			</React.Fragment>
		);
	}
}

export default MainContentCard;
