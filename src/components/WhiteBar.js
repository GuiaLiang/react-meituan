import React, { Component } from 'react'

class WhiteBar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div style={ {height: this.props.heightValue} }></div>
		)
	}
}

export default WhiteBar