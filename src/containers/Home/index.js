import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import Ad from './subpage/Ad'
import List from './subpage/List'
import WhiteBar from '../../components/WhiteBar'

class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<HomeHeader history={this.props.history} cityName={this.props.userInfo.get('cityName')} />
				<Category />
				<WhiteBar heightValue={'15px'} />
				<Ad />
				<List cityName={this.props.userInfo.get('cityName')} />
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
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)