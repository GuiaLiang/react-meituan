import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '@/components/Header'
import LoginComponent from '@/components/Login'

import * as userInfoActionsCreator from '@/actions/userInfo'

class Login extends Component {
	constructor() {
		super();
		this.state = {
			checking: true
		}

		this.handleLogin = this.handleLogin.bind(this)
	}

	componentDidMount() {
		this._doCheck();
	}

	_doCheck() {
		const userInfo = this.props.userInfo;
		if(userInfo.get('username')) {
			// 已经登录
			console.log(userInfo.get('username'))
			this._goUserPage();
		} else {
			// 未登录
			this.setState({
				checking: false
			})
		}
	}

	_goUserPage() {
		this.props.history.push('/user')
	}

	handleLogin(username, checkcode) {
		const actions = this.props.userInfoActions;
		actions.login({
			username
		})

		// 跳转页面
		const params = this.props.match.params;
		if(params.router) {
			this.props.history.replace(decodeURIComponent(params.router))
		} else {
			this._goUserPage();
		}
	}

	render() {
		return (
			<div>
				<Header title="登录" />
				{
					this.state.checking
					? <div>{/* 登录检查等待中 */}</div>
					: <LoginComponent handleLogin={this.handleLogin} />
				}
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
		userInfoActions: bindActionCreators(userInfoActionsCreator, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)