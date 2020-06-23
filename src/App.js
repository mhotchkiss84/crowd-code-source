import React, { Component } from 'react';
import NavBar from './components/nav/NavBar';
import ApplicationViews from './components/ApplicationViews';

class App extends Component {
	state = {
		isAuth: false
	};

	componentDidMount() {
		let user = parseInt(localStorage.userId, 10);
		console.log(user);
		if (isNaN(user) === false) {
			this.changeAuth();
		}
	}

	changeAuth = () => {
		const stateToChange = { isAuth: true };
		this.setState(stateToChange);
	};

	render() {
		return (
			<React.Fragment>
				<NavBar />
				<ApplicationViews changeAuth={this.changeAuth} />
			</React.Fragment>
		);
	}
}

export default App;
