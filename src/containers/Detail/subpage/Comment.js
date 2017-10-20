import React, { Component } from 'react'

import CommentList from '@/components/CommentList'

import './style.less'

class Comment extends Component {
	constructor() {
		super();
	}

	render() {
		const storeID = this.props.storeID

		return <CommentList storeID={storeID} />
	}
}

export default Comment