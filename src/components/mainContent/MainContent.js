import React, { Component } from 'react';
import ContentManager from '../../modules/ContentManager';
import MainContentCard from './MainContentCard';
import { DropdownButton, ButtonGroup, Button, Dropdown, Form } from 'react-bootstrap';
import Filter from '../filter/Filter';
import FormJSX from './FormJSX'

class MainContent extends Component {
	state = {
		posts: [],
		language: {},
		postsToRender: {},
		filterText: 'Filter',
		formToggle: false
	};

	componentDidMount() {
		ContentManager.getOneLanguage(this.props.languageId).then((singleLanguage) => {
			this.setState({
				language: singleLanguage
			});
		});
		ContentManager.getPostsByLanguageId(this.props.languageId).then((posts) => {
			this.setState({
				posts: posts
			});
		});
	}
	filterPosts = (id) => {
		if (id === 'All') {
			this.setState({ postsToRender: this.state.posts });
			this.setState({ filterText: 'All' });
			this.setState({ filter: true });
		} else {
			const matchingPosts = this.state.posts.filter((post) => post.categoryId === id);
			const matchingId = this.props.categories.filter((category) => category.id === id);
			this.setState({ postsToRender: matchingPosts });
			this.setState({ filterText: matchingId[0].name });
		}
	};

	toggleForm = () => {
		if (this.state.formToggle === false) {
			this.setState({ formToggle: true });
		} else {
			this.setState({ formToggle: false });
		}
	}

	refreshPage = () => {
		this.setState({formToggle: false})
		ContentManager.getPostsByLanguageId(this.props.languageId).then((posts) => {
			this.setState({
				posts: posts
			});
		});
	}

	formJSX = () => { 
		if (this.state.formToggle === true) {
			return (
				<Form>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Name</Form.Label>
						<Form.Control type="text" placeholder="Enter function name" />
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Description</Form.Label>
						<Form.Control type="text" placeholder="Description" />
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
					<Button variant="secondary" type="button">
						Cancel
					</Button>
				</Form>
			);
		}
	}
	loadedJSX() {
		let user = parseInt(localStorage.userId, 10)
		let isLoggedIn = false
		if(isNaN(user) == false){
			isLoggedIn = true
		}
		const variant = 'Secondary';
		let filter = false
		if(this.state.postsToRender.length !== undefined){
			filter = true
		}
		let posts = this.state.posts
		if(filter === true){
			posts = this.state.postsToRender
		}
		return (
			<React.Fragment>
				{/* Heading */}
				<h2 id="language-name">{this.state.language.shortName}</h2>
				<div id="main-content-card">
					{/* Left Div */}
					<div id="main-posts">
						<h3 id="function-title">Functions</h3>
						<div id="btn-group">
							<DropdownButton
								as={ButtonGroup}
								key={variant}
								id={`filter-btn`}
								variant={variant.toLowerCase()}
								title={this.state.filterText}
								size="sm"
							>
								<Dropdown.Item onClick={() => this.filterPosts('All')}>All</Dropdown.Item>
								{this.props.categories.map((category) => (
									<Filter
										key={category.id}
										name={category.name}
										Filter={this.filterPosts}
										filterId={category.id}
									/>
								))}
							</DropdownButton>
							
							{isLoggedIn
							?
							<Button variant="secondary" size="sm" onClick={this.toggleForm}>
							+
						</Button>
							: <p></p>
							}
						</div>
						<div id="main-function-posts">
						{posts.map((post) => {
							if (post.type === 'function') {
								return (
									<MainContentCard
										refresh={this.refreshPage}
										key={post.id}
										postTitle={post.name}
										postId={post.id}
										content={post.description}
										userId={post.user.id}
										userName={post.user.userName}
										postCategoryId={post.categoryId}
										categories={this.props.categories}
										languageId={this.props.languageId}
									/>
								);
							}
						})}
						</div>
					</div>
					{/* Center Div */}
					<div id="center-output"><FormJSX categories={this.props.categories} language={this.state.language} toggle={this.state.formToggle} formToggle={this.toggleForm}  refresh={this.refreshPage}/></div>
					{/* Right Div */}
					<div id="latest-posts-card">
						<h4 id="latest-post-title">Latest Post</h4>
						<MainContentCard
							postTitle={this.state.posts[this.state.posts.length - 1].name}
							content={this.state.posts[this.state.posts.length - 1].description}
							userName={this.state.posts[this.state.posts.length - 1].user.userName}
						/>
					</div>
				</div>
				{/* Bottom Div */}
				<div id="reference-card">
					<h4 id="reference-title">Resources</h4>
					<div id="reference-posts">
						{this.state.posts.map((post) => {
							if (post.type === 'resource') {
								return (
									<MainContentCard
										key={post.id}
										postTitle={post.name}
										content={post.description}
										userName={post.user.userName}
									/>
								);
							}
						})}
					</div>
				</div>
			</React.Fragment>
		);
	}

	waitingJSX() {
		return <React.Fragment />;
	}

	render() {

		if (this.state.posts.length !== 0) {
			return this.loadedJSX();
		} else {
			return this.waitingJSX();
		}
	}
}

export default MainContent;
