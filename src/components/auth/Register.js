import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Auth.css';
class Register extends Component {
	render() {
		return (
			<React.Fragment>
				<div id="register-container">
					<div id="form-container">
						<Form>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="Enter an email address" />
								<Form.Text className="text-muted">
									We'll never share your email with anyone else.
								</Form.Text>
							</Form.Group>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>User Name</Form.Label>
								<Form.Control type="text" placeholder="Enter a user name" />
							</Form.Group>
							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" placeholder="Password" />
								<Form.Group controlId="formBasicPassword">
									<Form.Label>Verify Password</Form.Label>
									<Form.Control type="password" placeholder="Verify Password" />
								</Form.Group>
							</Form.Group>
							<Button variant="primary" type="submit">
								Submit
							</Button>
							<Button variant="secondary" type="button" onClick={() => {this.props.history.push("/login")}}>
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
