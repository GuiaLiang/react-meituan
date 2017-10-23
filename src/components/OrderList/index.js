import React, { Component } from 'react'

import OrderItem from './Item'

import './style.less'

class OrderListComponent extends Component {
	render() {
		const data = this.props.data;
		return (
			<div>
				{
					data.map((item, index) => {
						return <OrderItem data={item} key={`orderitem-${index}`} 
								submitComment={this.props.submitComment}
							/>
					})
				}
			</div>
		);
	}
}

export default OrderListComponent