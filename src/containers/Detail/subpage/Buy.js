import React, { Component } from 'react'
import { connect } from 'react-redux'

import BuyAndStore from '@/components/BuyAndStore'

class Buy extends Component {
	constructor() {
		super();
		this.state = {
			isStore: false
		}

		this.handleBuy = this.handleBuy.bind(this)
		this.handleStore = this.handleStore.bind(this)
	}

	handleBuy() {
		// 判断是否登录
		const isLogin = this.checkLogin();
		if(!isLogin) return

		// 购买流程

		// 跳转到用户主页
		this.props.history.push('/user')
	}

	handleStore() {

	}

	checkLogin() {
		const id = this.props.storeID,
			  userInfo = this.props.userInfo;
		if(!userInfo.get('username')) {
			this.props.history.push(`/login/${encodeURIComponent('/detail/'+id)}`)
			return false
		}

		return true
	}

	render() {
		return (
			<BuyAndStore isStore={this.state.isStore} handleBuy={this.handleBuy}
				handleStore={this.handleStore} />
		);
	}
}

function mapStateToProps(state) {
	return {
		userInfo: state.userInfo
	}
}

export default connect(
	mapStateToProps
)(Buy)