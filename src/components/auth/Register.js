import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import RegisterManager from '../../modules/RegisterManager';
import './Auth.css';
import ReactDOM from 'react-dom';
class Register extends Component {
	state = {
		email: '',
		userName: '',
		password: '',
		verifiedPassword: ''
	};

	handleFieldChange = (evt) => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	};

	handleRegisterErrors(type) {
		if (type === 'nullField') {
			return ReactDOM.render(
				<p id="error-text">Please fill out all of the fields</p>,
				document.getElementById('auth-error')
			);
		} else if (type === 'passwordMath') {
			return ReactDOM.render(
				<p id="error-text">Passwords do not match</p>,
				document.getElementById('auth-error')
			);
		} else if(type === 'usernameInUse'){
			return ReactDOM.render(
				<p id="error-text">Username already in use</p>,
				document.getElementById('auth-error')
			);
		} else if(type === 'emailInUse') {
			return ReactDOM.render(
				<p id="error-text">Email address already in use</p>,
				document.getElementById('auth-error')
			);
		}
	}

	handleRegister = (e) => {
		e.preventDefault();
		if (
			this.state.email === '' ||
			this.state.userName === '' ||
			this.state.password === '' ||
			this.state.verifiedPassword === ''
		) {
			this.handleRegisterErrors('nullField');
		} else if (this.state.password !== this.state.verifiedPassword) {
			this.handleRegisterErrors('passwordMath');
		} else {
			RegisterManager.checkEmail(this.state.email.toLowerCase()).then((user) => {
				if (user.length !== 0) {
					this.handleRegisterErrors('emailInUse')
				} else {
					RegisterManager.checkUserName(this.state.userName.toLowerCase()).then((user) => {
						if (user.length !== 0) {
							this.handleRegisterErrors('usernameInUse')
						} else {
							const user = {
								userName: this.state.userName,
								nonCaseUserName: this.state.userName.toLowerCase(),
								email: this.state.email,
								nonCaseEmail: this.state.email.toLowerCase(),
								password: this.state.password
							};
							RegisterManager.post(user).then((user) => {
								localStorage.setItem('userId', user.id) ||
								localStorage.setItem('userName', user.userName) ||
								this.props.changeAuth() ||
								this.props.history.push('/');
							});
						}
					});
				}
			});
		}
	};

	render() {
		return (
			<React.Fragment>
				<div id="register-container">
					<div id="form-container">
						<Form onSubmit={this.handleRegister}>
							<Form.Group>
								<Form.Label>Email address</Form.Label>
								<Form.Control
									id="email"
									type="email"
									onChange={this.handleFieldChange}
									placeholder="Enter an email address"
								/>
								<Form.Text className="text-muted">
									We'll never share your email with anyone else.
								</Form.Text>
							</Form.Group>
							<Form.Group>
								<Form.Label>User Name</Form.Label>
								<Form.Control
									type="text"
									id="userName"
									onChange={this.handleFieldChange}
									placeholder="Enter a user name"
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									id="password"
									onChange={this.handleFieldChange}
									placeholder="Password"
								/>
								<Form.Group>
									<Form.Label>Verify Password</Form.Label>
									<Form.Control
										type="password"
										id="verifiedPassword"
										onChange={this.handleFieldChange}
										placeholder="Verify Password"
									/>
									<div id="auth-error" />
								</Form.Group>
							</Form.Group>
							<Button variant="primary" type="submit">
								Submit
							</Button>
							<Button
								variant="secondary"
								type="button"
								onClick={() => {
									this.props.history.push('/login');
								}}
							>
								Login
							</Button>
						</Form>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Register;
