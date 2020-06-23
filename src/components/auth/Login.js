import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Auth.css';
import LoginManager from '../../modules/LoginManager';
import App from '../../App';
class Login extends Component {
	// Initial state
	state = {
		email: '',
		password: ''
	};
	// Update state whenever an input field is edited
	handleFieldChange = (evt) => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	};

	handleAuthChange = () => {
		App.changeAuth();
	};

	handleLogin = (e) => {
		e.preventDefault();
		LoginManager.authUser(this.state.email, this.state.password).then((user) => {
			if (user.length === 0) {
				window.alert('Invalid Login');
			} else {
				localStorage.setItem('userId', user[0].id);
				localStorage.setItem('userName', user[0].userName);
				this.props.changeAuth();
				this.props.history.goBack();
			}
		});
	};

	render() {
		return (
			<React.Fragment>
				<div id="login-container">
					<div id="form-container">
						<Form onSubmit={this.handleLogin}>
							<Form.Group>
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type="email"
									id="email"
									onChange={this.handleFieldChange}
									placeholder="Enter email"
								/>
								<Form.Text className="text-muted">
									We'll never share your email with anyone else.
								</Form.Text>
							</Form.Group>
							<Form.Group>
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									id="password"
									onChange={this.handleFieldChange}
									placeholder="Password"
								/>
							</Form.Group>
							<Form.Group controlId="formBasicCheckbox">
								<Form.Check type="checkbox" label="Remember Me" />
							</Form.Group>
							<Button variant="primary" type="submit">
								Submit
							</Button>
							<Button
								variant="secondary"
								type="button"
								onClick={() => {
									this.props.history.push('/register');
								}}
							>
								Register
							</Button>
						</Form>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Login;
