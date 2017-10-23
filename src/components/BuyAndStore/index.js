import React, { Component } from 'react'

import './style.less'

class BuyAndStore extends Component {
	constructor() {
		super();

		this.handleStoreClick = this.handleStoreClick.bind(this)
		this.handleBuyClick = this.handleBuyClick.bind(this)
	}

	handleStoreClick() {
		const handleStore = this.props.handleStore;
		handleStore && handleStore();
	}

	handleBuyClick() {
		this.props.handleBuy();
	}

	render() {
		return (
			<div className="bs-container">
				<button onClick={this.handleStoreClick}
					className={this.props.isStore? 'stored': ''}>{
					this.props.isStore
					? '已收藏'
					: '收藏'
				}</button>
				<button onClick={this.handleBuyClick}>购买</button>
			</div>
		);
	}
}

export default BuyAndStore