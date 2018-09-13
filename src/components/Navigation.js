import React, { Component } from 'react';

class Navigation extends Component {
	render() {
		return (
				<nav className="navbar navbar-dark bg-dark">
	        		navagaci&oacute; Hecho por {this.props.autor}
	    		</nav>
		);
	}

}

export default Navigation;