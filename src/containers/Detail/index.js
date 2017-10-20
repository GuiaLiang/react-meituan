import React, { Component } from 'react'
import Header from '@/components/Header'
import Info from './subpage/Info'
import Comment from './subpage/Comment'
import Buy from './subpage/Buy'
import WhiteBar from '@/components/WhiteBar'

import './style.less'

class Detail extends Component {
	constructor() {
		super();
	}

	render() {
		const id = this.props.match.params.id;
		return (
			<div>
				<Header title='商户详情' />
				<Info storeID={id} />
				<Buy storeID={id} history={this.props.history} />
 				<WhiteBar heightValue={'15px'} />
				<Comment storeID={id} />
			</div>
		)
	}
}

export default Detail