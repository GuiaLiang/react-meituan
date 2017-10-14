import React, { Component } from 'react'

import { getListData } from '../../../fetch/home/home'
import DumbList from '../../../components/List'

import './style.less'

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [], //存储展示数据
			hasMore: false,
			isLoadingMore: false,
			page: 1 //下一页的页码
		}
	}

	componentDidMount() {
		this._loadFirstPageData();
	}

	_loadFirstPageData() {
		const cityName = this.props.cityName;
		let result = getListData(cityName, 0);
		this._handleResult(result)
	}

	_loadMoreData() {
		const cityName = this.props.cityName;
		let result = getListData(cityName, this.state.page);
		this._handleResult(result)
	}

	_handleResult(result) {
		return result.then(res => res.json()).then(data => this.setState({
			list: data.data,
			hasMore: data.hasMore
		}))
	}

	render() {
		return (
			<div>
				<div className="homelist-title">猜你喜欢</div>
				{
					this.state.list && this.state.list.length > 0
					? <DumbList data={this.state.list} />
					: <div>加载中...</div>
				}
			</div>
		)
	}
}

export default List