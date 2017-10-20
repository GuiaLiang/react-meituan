import React, { Component } from 'react'

import './style.less'

class BuyAndStore extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="bs-container">
				<button>收藏</button>
				<button>购买</button>
			</div>
		);
	}
}

export default BuyAndStore