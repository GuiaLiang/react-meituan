import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '@/components/Header'
import UserInfo from '@/components/UserInfo'
import WhiteBar from '@/components/WhiteBar'
import OrderList from './subpage/OrderList'

import './style.less'

class User extends Component {
	constructor() {
		super();
	}

	componentDidMount() {
		if(!this.props.userInfo.get('username')) {
			this.props.history.push('/login/' + encodeURIComponent('/user'))
		}
	}

	render() {
		return (
			<div className="user-container">
				<Header title="用户中心" backRouter="/" history={this.props.history} />
				<UserInfo username={this.props.userInfo.get('username')}
					cityName={this.props.userInfo.get('cityName')} />
				<WhiteBar heightValue='15px' />
				<OrderList username={this.props.userInfo.get('username')} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		userInfo: state.userInfo
	}
}

function mapDispatchToProps(dispatch) {
	return {

	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(User)