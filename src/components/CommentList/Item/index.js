import React, { Component } from 'react'
import Star from '@/components/Star'

import './style.less'

class CommentItem extends Component {
	render() {
		const data = this.props.data
		return (
			<div className="commentitem-container">
				<div className="username-wrap">
					<i className="icon-user"></i>
					<span className="username">{data.username}</span>
				</div>
				<Star star={data.star} />
				<div className="comment">{data.comment}</div>
			</div>
		);
	}
}

export default CommentItem