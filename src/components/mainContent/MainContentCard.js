import React, { Component } from 'react';
import './MainContent.css';
import ReactDOM from 'react-dom';
import EditForm from './EditForm';
import DetailView from './DetailView';
import ContentManager from '../../modules/ContentManager';

class MainContentCard extends Component {
	state = {
		showEditForm: false,
		postToEdit: {},
		showDetailView: false,
		detailView: {}
	};

	clearDetailView = () => {
		this.clearRender();
		this.setState({ showDetailView: false });
		this.clearRender();
	};

	toggleDetailView = () => {
		this.clearRender();
		this.hideEditForm()
		this.setState({showEditForm: false})
		this.props.hideNewForm()
		this.setState({ showDetailView: true });
		let postToShow = this.buildPostToEdit();
		this.setState({ detailView: postToShow });
		let postToEdit = this.buildPostToEdit();
		this.setState({ postToEdit: postToEdit });
	};

	toggleEditForm = () => {
		this.clearRender();
		this.props.hideNewForm()
		this.setState({ showEditForm: true });
		let postToEdit = this.buildPostToEdit();
		this.setState({ postToEdit: postToEdit });
	};

	hideEditForm = () => {
		this.setState({ showEditForm: false });
		this.clearRender();
	};

	buildPostToEdit = () => {
		return {
			id: this.props.postId,
			title: this.props.postTitle,
			description: this.props.content,
			category: this.props.postCategory
		};
	};

	editRender() {
		this.clearRender();
		return ReactDOM.render(
			<EditForm
				hideEditForm={this.hideEditForm}
				languageId={this.props.languageId}
				toggleEditForm={this.toggleEditForm}
				refresh={this.props.refresh}
				postCategoryId={this.props.postCategoryId}
				categories={this.props.categories}
				postToEdit={this.state.postToEdit}
				toggleDetailView={this.toggleDetailView}
				deletePost={this.deletePost}
			/>,
			document.getElementById('center-output')
		);
	}

	detailRender() {
		this.clearRender();
		return ReactDOM.render(
			<DetailView
				languageId={this.props.languageId}
				toggleDetailView={this.toggleDetailView}
				refresh={this.props.refresh}
				postCategoryId={this.props.postCategoryId}
				categories={this.props.categories}
				detailView={this.state.detailView}
				userName={this.props.userName}
				toggleEditForm={this.toggleEditForm}
				userId={this.props.userId}
				clearDetailView={this.clearDetailView}
				deletePost={this.deletePost}
				postId={this.props.postId}
			/>,
			document.getElementById('center-output')
		);
	}
	deletePost = () => {
		ContentManager.delete(this.props.postId).then(() => {
			this.setState({ showEditForm: false });
			this.setState({ showDetailView: false });
			this.clearDetailView();
			this.props.refresh();
			this.clearRender();
		});
	};

	clearRender() {
		return ReactDOM.render(<p />, document.getElementById('center-output'));
	}

	render() {
		let user = parseInt(localStorage.userId, 10);
		let showEdit = false;
		if (isNaN(user) === false) {
			if (user === this.props.userId) showEdit = true;
		}

		if (this.state.showEditForm === true) {
			// this.clearDetailView();
			// this.clearRender();
			this.editRender();
		}

		if (this.state.showDetailView === true) {
			this.clearDetailView();
			this.clearRender();
			this.detailRender();
		}

		return (
			<React.Fragment>
				<a id="post-heading" onClick={this.toggleDetailView} href="#">
					{this.props.postTitle}
				</a><br/>
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
