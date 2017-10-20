import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSearchData } from '@/fetch/search'
import DumbList from '@/components/List'
import LoadMore from '@/components/LoadMore'

const initialState = {
	list: [], //存储展示数据
	hasMore: false,
	isLoadingMore: false,
	page: 1 //下一页的页码
}

class SearchList extends Component {
	constructor() {
		super();
		this.state = Object.assign({}, initialState);

		this._loadMoreData = this._loadMoreData.bind(this)
	}

	componentDidMount() {
		this._loadFirstPageData();
	}

	componentDidUpdate(prevProps, prevState) {
		const keyword = this.props.keyword,
			  category = this.props.category;

		if(keyword === prevProps.keyword && category === this.props.category) {
			return;
		}

		this.setState(initialState)

		this._loadFirstPageData();
	}

	_loadFirstPageData() {
		const cityName = this.props.userInfo.get('cityName');
		let result = getSearchData(cityName, this.props.category, this.props.keyword, 0);
		this._handleResult(result, true)
	}

	_loadMoreData() {
		this.setState({
			isLoadingMore: true
		});

		const cityName = this.props.userInfo.get('cityName');
		let result = getSearchData(cityName, this.props.category, this.props.keyword, this.state.page);
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

function mapStateToProps(state) {
	return {
		userInfo: state.userInfo
	}
}

export default connect(
	mapStateToProps
)(SearchList)