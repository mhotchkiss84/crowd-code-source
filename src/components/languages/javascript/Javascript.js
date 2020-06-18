import React, { Component } from 'react';
import './js.css';

class JavaScript extends Component {
	render() {
		return (
			<React.Fragment>
				<div id="main-container">
					<img id="js-image" src={require('./jsLogo.png')} alt="Code" />
				</div>
			</React.Fragment>
		);
	}
}

export default JavaScript;
