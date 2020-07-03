import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './MainContent.css';

class DetailView extends Component {
	render() {
		let user = parseInt(localStorage.userId, 10);
		let showEdit = false;
		if (isNaN(user) === false) {
			if (user === this.props.userId) {
				showEdit = true;
			}
		}

		const postId = this.props.postId

		return (
			<div id="detail-view">
				<h4>{this.props.detailView.title}</h4>
				<p>By: {this.props.userName}</p>
				<p>{this.props.detailView.description}</p>
				<Button variant="secondary" onClick={this.props.clearDetailView}>
					Close
				</Button>

				{showEdit ? (
					<React.Fragment>
						<Button variant="success" onClick={this.props.toggleEditForm}>
							Edit
						</Button>
						<Button variant="danger" onClick={() => this.props.deletePost(this.props.postId)}>
							Delete
						</Button>
					</React.Fragment>
				) : (
					<p />
				)}
			</div>
		);
	}
}

export default DetailView;
