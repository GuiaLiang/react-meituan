import React, { Component } from 'react'
import HomeAd from '../../../components/HomeAd'
import { getAdData } from '../../../fetch/home/home'

class Ad extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ads: []
		}
	}

	componentDidMount() {
		var result = getAdData();
		result.then(res => res.json()).then(data => this.setState({
			ads: data
		}))
	}

	render() {
		return (
			<div>
				{
					this.state.ads && this.state.ads.length > 0 
					? <HomeAd data={this.state.ads} />
					: <div>加载中...</div>
				}
			</div>
		);
	}
}

export default Ad