import React, { Component } from 'react'

import { getOrderListData, postComment } from '@/fetch/user'

import OrderListComponent from '@/components/OrderList'

import './style.less'

class OrderList extends Component {
	constructor() {
		super();
		this.state = {
			data: []
		}

		this.submitComment = this.submitComment.bind(this)
	}

	componentDidMount() {
		const username = this.props.username;

		if(username) {
			this.loadOrderList(username);
		}
	}

	loadOrderList(username) {
		const result = getOrderListData(username);
		result.then(res => res.json()).then(data => {
			this.setState({
				data
			})
		})
	}

	submitComment(id, value, cb) {
		const result = postComment(id, value);

		result.then(res => res.json()).then(data => {
			if (data.errno === 0) {
				// Success
				cb && cb()
			}
		})
	}

	render() {
		return (
			<div className="orderlist-container">
				<h2>您的订单</h2>
				{
					this.state.data.length > 0
					? <OrderListComponent data={this.state.data} submitComment={this.submitComment} />
					: ''
				}
			</div>
		);
	}
}

export default OrderList