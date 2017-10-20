import React, { Component } from 'react'

import { getListData } from '@/fetch/home/home'
import DumbList from '@/components/List'
import LoadMore from '@/components/LoadMore'

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

		this._loadMoreData = this._loadMoreData.bind(this)
	}

	componentDidMount() {
		this._loadFirstPageData();
	}

	_loadFirstPageData() {
		const cityName = this.props.cityName;
		let result = getListData(cityName, 0);
		this._handleResult(result, true)
	}

	_loadMoreData() {
		this.setState({
			isLoadingMore: true
		});

		const cityName = this.props.cityName;
		let result = getListData(cityName, this.state.page);
		this._handleResult(result)
	}

	_handleResult(result, isFirstLoad) {
		return result.then(res => res.json()).then(data => this.setState({
			list: this.state.list.concat(data.data),
			hasMore: data.hasMore,
			isLoadingMore: false,
			page: !isFirstLoad? this.state.page+1 : this.state.page
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
				{
					this.state.hasMore
					? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this._loadMoreData} />
					: ''
				}
			</div>
		)
	}
}

export default List