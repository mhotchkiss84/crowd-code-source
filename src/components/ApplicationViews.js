import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './home/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import JavaScript from './languages/javascript/Javascript';

class ApplicationViews extends Component {
	render() {
		return (
			<React.Fragment>
				<Route
					exact
					path="/"
					render={(props) => {
						return <Home {...props} />;
					}}
				/>
				<Route
					path="/login"
					render={(props) => {
						return <Login {...props} changeAuth={this.props.changeAuth} />;
					}}
				/>
				<Route
					path="/register"
					render={(props) => {
						return <Register {...props} />;
					}}
				/>
				<Route
					path="/javascript"
					render={(props) => {
						return <JavaScript />;
					}}
				/>
			</React.Fragment>
		);
	}
}

export default ApplicationViews;
