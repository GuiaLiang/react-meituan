import React, { Component } from 'react'

import Item from './Item'

import LoadMore from '@/components/LoadMore'
import { getCommentData } from '@/fetch/detail'

import './style.less'

class CommentList extends Component {
	constructor() {
		super();
		this.state = {
			isLoadingMore: false,
			hasMore: true,
			data: [],
			page: 1
		}

		this._loadMoreData = this._loadMoreData.bind(this)
	}

	componentDidMount() {
		this._loadFirstData();
	}

	_loadFirstData() {
		this.setState({
			isLoadingMore: true
		})

		this._handleResult(getCommentData(this.props.storeID, 0), true)
	}

	_loadMoreData() {
		this.setState({
			isLoadingMore: true
		})

		this._handleResult(getCommentData(this.props.storeID, this.state.page))
	}

	_handleResult(result, isFirstLoad) {
		result.then(res => res.json()).then(data => {
			this.setState({
				isLoadingMore: false,
				hasMore: data.hasMore,
				data: this.state.data.concat(data.data),
				page: isFirstLoad? this.state.page : this.state.page+1
			})
		})
	}

	render() {
		return (
			<div className="commentlist-container">
				<div className="header">用户点评</div>
				<div className="comment-content">
					{
						this.state.data.map((v, i) => {
							return <Item data={v} key={`comment-item-${i}`} />
						})
					}
				</div>
				{
					this.state.hasMore
					? <LoadMore isLoadingMore={this.state.isLoadingMore} 
						loadMoreFn={this._loadMoreData} />
					: ''
				}
			</div>
		);
	}
}

export default CommentList