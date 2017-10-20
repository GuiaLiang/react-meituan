import React, { Component } from 'react'

import './style.less'

class SearchInput extends Component {
	constructor() {
		super();
		this.state = {
			value: ''
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleEnterClick = this.handleEnterClick.bind(this)
	}

	componentDidMount() {
		this.setState({
			value: this.props.value
		})
	}

	handleChange(e) {
		this.setState({
			value: e.target.value
		})
	}

	handleEnterClick(e) {
		if(e.keyCode && e.keyCode === 13) {
			this.props.enterHandler && this.props.enterHandler(this.state.value);
		}
	}

	render() {
		return <input className="search-content" placeholder="请输入关键字" type="text"
					value={this.state.value}
					onChange={this.handleChange}
					onKeyDown={this.handleEnterClick}
				/>
	}
}

export default SearchInput