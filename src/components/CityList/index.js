import React, { Component } from 'react'

import './style.less'

class CityList extends Component {
	constructor() {
		super();
		this.state = {
			cities: ['北京','上海','杭州','广州','苏州','深圳','南京','天津','重庆',
				'厦门','武汉','西安'
			]
		}
	}

	handleCityClick(newcity) {
		this.props.changeCityName && this.props.changeCityName(newcity)
	}

	render() {
		return (
			<div className="citylist-container">
				<h1>热门城市</h1>
				<div className="cities">
					{
						this.state.cities.map((item, index) => {
							return (
								<div key={`city-item-${index}`} className="city-item"
									onClick={this.handleCityClick.bind(this, item)}
								>
									<span className="city">{item}</span>
								</div>
							)
						})	
					}
				</div>
			</div>
		)
	}
}

export default CityList