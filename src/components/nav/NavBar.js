import React, { Component } from 'react';
import {
	Navbar,
	Nav,
	Form,
	FormControl,
	Button,
	NavDropdown,
	Dropdown,
	DropdownButton,
	ButtonGroup
} from 'react-bootstrap';
import './NavBar.css';
import NavItem from './NavItem'
class NavBar extends Component {

	loggedOutNav() {
		return (
			<Nav>
				<Nav.Link id="login-link" href="/login">
					Login
				</Nav.Link>
				<Nav.Link id="register-link" href="/register">
					Register
				</Nav.Link>
			</Nav>
		);
	}

	loggedInNav() {
		return (
			<Nav>
				<Nav.Link id="register-link" href="#">
					{localStorage.userName}
				</Nav.Link>
				<Nav.Link id="login-link" href={'/login'} onClick={() => localStorage.clear()}>
					Logout
				</Nav.Link>
			</Nav>
		);
	}

	navAuth() {
		let user = parseInt(localStorage.userId, 10);
		if (isNaN(user) === true) {
			return this.loggedOutNav();
		} else {
			return this.loggedInNav();
		}
	}

	render() {
		return (
			<React.Fragment>
				<Navbar bg="dark" variant="dark" sticky="top">
					<Navbar.Brand href="/">Code Source</Navbar.Brand>
					<NavDropdown title="Language" id="basic-nav-dropdown">
						{this.props.languages.map(language =>
							<NavItem key={language.id}language={language}/>)}
					</NavDropdown>
					{/* <NavDropdown title="Framework" id="collasible-nav-dropdown">
						<div className="mb-2 nav-dropdown">
							<DropdownButton
								className="nav-dropdown"
								as={ButtonGroup}   
								key={'right'}
								id={`dropdown-button-drop-right`}
								drop={'right'}
								variant="secondary"
								title={` javascript`}
							>
								<Dropdown.Item eventKey="1">Bootstrap</Dropdown.Item>
								<Dropdown.Item eventKey="2">React</Dropdown.Item>
							</DropdownButton>
						</div>
						<NavDropdown.Item href="#action/3.2">Python</NavDropdown.Item>
					</NavDropdown> */}
					<Nav className="mr-auto" />
					{this.navAuth()}
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-info">Search</Button>
					</Form>
				</Navbar>
			</React.Fragment>
		);
	}
}

export default NavBar;
