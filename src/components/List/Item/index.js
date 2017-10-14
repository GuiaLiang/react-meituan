import React, { Component } from 'react'

import './style.less'

class Item extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const data = this.props.data;

		return (
			<div className="item-container">
				<div className="img-wrap">
					<img src={data.img} alt={data.title} />
				</div>
				<div className="content-wrap">
					<div className="title-wrap">
						<div className="title">{data.title}</div>
						<div className="distance">{data.distance}</div>
					</div>
					<div className="subTitle">{data.subTitle}</div>
					<div className="info">
						<div className="price">¥{data.price}</div>
						<div className="number">已售{data.number}</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Item