import React, { Component } from 'react'

import './style.less'

class UserInfo extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="userinfo-container">
				<div className="username-wrap">
					<i className="icon-user"></i>
					<span className="username">{this.props.username}</span>
				</div>
				<div className="cityName-wrap">
					<i className="icon-map-marker"></i>
					<span className="cityName">{this.props.cityName}</span>
				</div>
			</div>
		);
	}
}

export default UserInfo