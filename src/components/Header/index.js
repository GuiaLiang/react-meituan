import React, { Component } from 'react'

import './style.less'

class Header extends Component {
	constructor(props) {
		super(props);
	}

	handleBack() {
		window.history.back();
	}

	render() {
		return (
			<div className="commonheader-container">
				<span className="back-icon" onClick={this.handleBack}>
					<i className="icon-chevron-left"></i>
				</span>
				<h1>{this.props.title}</h1>
			</div>
		)
	}
}

export default Header