import React, {Component} from 'react';

import LocalStore from '../util/localStore'
import {CITYNAME} from '../constants/localStoreKey'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsCreator from '../actions/userInfo'

import RouteMap from '@/router/routeMap'

class App extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			initDone: false
		}
	}

	componentDidMount() {
		let cityName = LocalStore.getItem(CITYNAME);
		if(cityName == null) {
			cityName = '北京';
		}

		// 存储到redux
		this.props.userInfoActions.update({cityName});

		this.setState({
			initDone: true
		})
	}

	render() {
		return (
			<div>
				{
					this.state.initDone
					? <RouteMap />
					: <div>加载中...</div>
				}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {}
}

function mapDispatchToProps(dispatch) {
	return {
		userInfoActions: bindActionCreators(userInfoActionsCreator, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)