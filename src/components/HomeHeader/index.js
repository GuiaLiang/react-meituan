import React, { Component } from 'react'
import './style.less'

class HomeHeader extends Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<div className="home-header-container clear-fix">
				<div className="left-box">
					<span className="city">{this.props.cityName}</span>
					<i className="icon-angle-down"></i>
				</div>
				<div className="main">
					<i className="icon-search"></i>
					<input className="search-content" placeholder="请输入关键字" type="text" />
				</div>
				<div className="right-box"><i className="icon-user"></i></div>
			</div>
		)
	}
}

export default HomeHeader