import React, { Component } from 'react'

import { throttle } from '@/util/tools'

import './style.less'

class LoadMore extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const loadMoreFn = this.props.loadMoreFn;
		const wrapper = this.wrapper;
		const winHeight = window.innerHeight || document.documentElement.clientHeight;
		this.scrollHandler = throttle(() => {
			if(!this.props.isLoadingMore) {
				let top = wrapper.getBoundingClientRect().top;
				if(top && top <= winHeight) {
					loadMoreFn();
				}
			}
		});

		window.addEventListener('scroll', this.scrollHandler, false);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.scrollHandler);
	}

	render() {
		return (
			<div className="loadmore-container" ref={(wrapper) => this.wrapper = wrapper}>
				{
					this.props.isLoadingMore
					? <span>加载中...</span>
					: <span>加载更多</span>
				}
			</div>
		)
	}
}

export default LoadMore