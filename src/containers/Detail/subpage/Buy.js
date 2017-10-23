import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BuyAndStore from '@/components/BuyAndStore'

import * as storeActionsCreator from '@/actions/store'

class Buy extends Component {
	constructor() {
		super();
		this.state = {
			isStore: false
		}

		this.handleBuy = this.handleBuy.bind(this)
		this.handleStore = this.handleStore.bind(this)
	}

	componentDidMount() {
		this.checkStoreState();
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
		const isLogin = this.checkLogin();
		if(isLogin) {
			const storeID = this.props.storeID;
			const storeActions = this.props.storeActions;
			if(this.state.isStore) {
				// 从已收藏变为为收藏
				storeActions.rm({
					id: storeID
				})
			} else {
				// 变为已收藏
				storeActions.add({
					id: storeID
				})
			}

			this.setState({
				isStore: !this.state.isStore
			})
		}
	}

	checkStoreState() {
		// 检查是否被收藏
		const storeID = this.props.storeID;
		const store = this.props.store;

		store.some(x => {
			if(x.id === storeID) {
				this.setState({
					isStore: true
				})

				return true;
			}
		})
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
		userInfo: state.userInfo,
		store: state.store
	}
}

function mapDispatchToProps(dispatch) {
	return {
		storeActions: bindActionCreators(storeActionsCreator, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Buy)