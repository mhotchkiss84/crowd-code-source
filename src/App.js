import React, { Component } from 'react';
import NavBar from './components/nav/NavBar';
import ApplicationViews from './components/ApplicationViews';
import NavBarManager from './modules/NavBarManager'
import ContentManager from './modules/ContentManager'

class App extends Component {
	state = {
		isAuth: false,
		languages: [],
		categories: []
	};

	componentDidMount() {
		let user = parseInt(localStorage.userId, 10);
		if (isNaN(user) === false) {
			this.changeAuth();
		}
		NavBarManager.getAll().then((languages) =>{
			this.setState({
				languages: languages
			})
		})
		ContentManager.getCategories().then((categories) =>{
			this.setState({
				categories: categories
			})
		})
	}

	changeAuth = () => {
		const stateToChange = { isAuth: true };
		this.setState(stateToChange);
	};

	render() {
		return (
			<React.Fragment>
				<NavBar languages={this.state.languages}/>
				<ApplicationViews languages={this.state.languages} categories={this.state.categories}changeAuth={this.changeAuth} />
			</React.Fragment>
		);
	}
}

export default App;
