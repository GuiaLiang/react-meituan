import React, { Component } from 'react'

import SearchHeader from '@/components/SearchHeader'
import SearchList from './subpage/List'

class Search extends Component {
	render() {
		const params = this.props.match.params;
		return (
			<div>
				<SearchHeader keyword={params.keyword} history={this.props.history} />
				<SearchList keyword={params.keyword || 'none'} category={params.category} />
			</div>
		)
	}
}

export default Search