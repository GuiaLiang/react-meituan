import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import SearchInput from '@/components/SearchInput'

import './style.less'

class HomeHeader extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			kwd: ''
		}
		this.handleSearchChange = this.handleSearchChange.bind(this)
		this.handleEnterClick = this.handleEnterClick.bind(this)
	}

	handleSearchChange(e) {
		this.setState({
			kwd: e.target.value
		})
	}

	handleEnterClick(value) {
		this.props.history.push(`/search/all/${encodeURIComponent(value)}`)
	}

	render() {
		return (
			<div className="home-header-container clear-fix">
				<div className="left-box">
					<Link to="/city"><span className="city">{this.props.cityName}</span></Link>
					<i className="icon-angle-down"></i>
				</div>
				<div className="main">
					<i className="icon-search"></i>
					<SearchInput value="" enterHandler={this.handleEnterClick} />
				</div>
				<div className="right-box">
					<Link to="/login">
						<i className="icon-user"></i>
					</Link>
				</div>
			</div>
		)
	}
}

export default HomeHeader