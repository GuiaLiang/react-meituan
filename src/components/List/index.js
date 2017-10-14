import React, { Component } from 'react'
import Item from './Item'
import './style.less'

class DumbList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const data = this.props.data;

		return (
			<div className="likelist-container">
				{
					data.map((item, index) => {
						return <Item key={`likelist-${index}`} data={item} />
					})
				}
			</div>
		)
	}
}

export default DumbList