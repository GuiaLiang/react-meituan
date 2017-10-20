import React, { Component } from 'react'

import './style.less'

class Star extends Component {
	static defaultProps = {
		star: 0
	}

	render() {
		let star = this.props.star
		star = star > 5? star % 5 : star
		return (
			<div className="star-container">
				{
					[1,2,3,4,5].map((v, i) => {
						const lightCls = v <= star? 'icon-star light' : 'icon-star'
						return <i key={`star-${i}`} className={lightCls}></i>
					})
				}
			</div>
		)
	}
}

export default Star