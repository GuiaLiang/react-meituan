import React, { Component } from 'react'
import Star from '@/components/Star'
import './style.less'

class DetailInfo extends Component {
	constructor() {
		super();
	}

	render() {
		const data = this.props.data

		return (
			<div className="detailinfo-container">
				<div className="item info-show">
					<img src={data.img} alt={data.title} />
					<div className="info">
						<h1>{data.title}</h1>
						<Star star={data.star} />
						<span className="price">¥ {data.price}</span>
						<p className="subTitle">{data.subTitle}</p>
					</div>
				</div>
				<div className="item work-time">
					<span dangerouslySetInnerHTML={{__html: data.desc}}></span>
				</div>
			</div>
		)
	}
}

export default DetailInfo