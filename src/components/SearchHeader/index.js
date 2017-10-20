import React, { Component } from 'react'

import SearchInput from '@/components/SearchInput'

import './style.less'

class SearchHeader extends Component {
	constructor() {
		super();
		this.handleBack = this.handleBack.bind(this)
		this.handleEnterClick = this.handleEnterClick.bind(this)
	}

	handleBack() {
		this.props.history.push('/')
	}

	handleEnterClick(value) {
		if(this.props.keyword !== value) {
			this.props.history.push(`/search/all/${encodeURIComponent(value)}`)
		}
	}

	render() {

		return (
			<div className="searchheader-container">
				<span className="back-icon" onClick={this.handleBack}>
					<i className="icon-chevron-left"></i>
				</span>
				<div className="header">
					<i className="icon-search"></i>
					<SearchInput value={this.props.keyword || ''} enterHandler={this.handleEnterClick} />
				</div>
			</div>
		)

	}
}

export default SearchHeader