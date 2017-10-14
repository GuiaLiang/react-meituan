import React, { Component } from 'react'
import './style.less'

class HomeAd extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const data = this.props.data;

		return (
			<div className="homead-container">
				<div className="title">超值特惠</div>
				<ul className="content clear-fix">
					{data.map((item,index) => {
						return (
							<li className="item" key={`ad-${index}`}>
								<a href={item.link}><img src={item.img} alt={item.title} /></a>
							</li>
						)
					})}
				</ul>
			</div>
		);
	}
}

export default HomeAd