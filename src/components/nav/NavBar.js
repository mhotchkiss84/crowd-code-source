import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Dropdown, SplitButton } from 'react-bootstrap';

class NavBar extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar bg="dark" variant="dark" sticky="top">
					<Navbar.Brand href="/">Code Source</Navbar.Brand>
					<NavDropdown title="Language" id="basic-nav-dropdown">
						<NavDropdown.Item href="/csharp">C#</NavDropdown.Item>
						<NavDropdown.Item href="/cplusplus">C++</NavDropdown.Item>
						<NavDropdown.Item href="/javascript">javascript</NavDropdown.Item>
					</NavDropdown>
					<Nav className="mr-auto" />
					<Nav>
						<Nav.Link href="/login">Login</Nav.Link>
						<Nav.Link href="/register">Register</Nav.Link>
					</Nav>
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
