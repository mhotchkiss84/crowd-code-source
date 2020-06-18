import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Auth.css';
class Login extends Component {
    // Initial state
    state= {
        email: "",
        password: ""
    }
    // Update state whenever an input field is edited
    handleFieldChange = (evt) =>{
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    
    handleLogin = (e) =>{
        e.preventDefault()
        
    }

	render() {
		return (
			<React.Fragment>
                <div id="login-container">
				<div id="form-container">
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
							<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
						<Form.Group controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Remember Me" />
						</Form.Group>
						<Button variant="primary" type="submit">
							Submit
						</Button>
                        <Button variant="secondary" type="button" onClick={() => {this.props.history.push("/register")}}>
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
