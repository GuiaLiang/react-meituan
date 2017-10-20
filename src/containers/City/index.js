import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '@/components/Header'
import CurrentCity from '@/components/CurrentCity'
import CityList from '@/components/CityList'

import * as userInfoActionsCreator from '@/actions/userInfo'
import { bindActionCreators } from 'redux'
import './style.less'

import localStore from '@/util/localStore'
import { CITYNAME } from '@/constants/localStoreKey'

class City extends Component {
	constructor() {
		super();
		this.changeCityName = this.changeCityName.bind(this);
	}

	changeCityName(newcity) {
		this.props.userInfoActions.update({cityName: newcity});

		localStore.setItem(CITYNAME, newcity)

		this.props.history.push('/')
	}

	render() {
		return (
			<div>
				<Header title={'选择城市'} />
				<CurrentCity cityName={this.props.userInfo.get('cityName')} />
				<CityList changeCityName={this.changeCityName}/>
			</div>
		)
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
)(City)