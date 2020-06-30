import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './home/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import MainContent from './mainContent/MainContent'

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
						return <Register {...props} changeAuth={this.props.changeAuth}/>;
					}}
				/>
				<Route
					path="/languages/:languageName/:languageId"
					render={(props) => {
						return <MainContent categories={this.props.categories} languageId={parseInt(props.match.params.languageId)}{...props} />;
					}}
				/>
			</React.Fragment>
		);
	}
}

export default ApplicationViews;
