import React, { Component } from 'react'

import { getInfoData } from '@/fetch/detail'

import DetailInfo from '@/components/DetailInfo'

import './style.less'

class Info extends Component {
	constructor() {
		super();
		this.state = {
			info: null
		}
	}

	componentDidMount() {
		const storeID = this.props.storeID
		getInfoData(storeID).then(res => res.json())
			.then(data => this.setState({
				info: data
			}))

	}

	render() {
		return (
			<div className="info-container">
				{
					this.state.info
					? <DetailInfo data={this.state.info} />
					: <div>加载中...</div>
				}
			</div>
		)
	}
}

export default Info