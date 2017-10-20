import React, { Component } from 'react'

import './style.less'

class CurrentCity extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="curcity-container">
				<span>{this.props.cityName}</span>
			</div>
		)
	}
}

export default CurrentCity