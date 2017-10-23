import React, { Component } from 'react'

import './style.less'

class OrderItem extends Component {
	constructor() {
		super();
		this.state = {
			commentState: 1 // 0:未评价  1:评价中 2:已评价
		}

		this.showComment = this.showComment.bind(this)
		this.cancelComment = this.cancelComment.bind(this)
		this.commentSuccess = this.commentSuccess.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount() {
		this.setState({
			commentState: this.props.data.commentState
		})
	}

	showCommentBtn() {
		if(this.state.commentState === 0) {
			return (<button onClick={this.showComment}>评价</button>);
		} else if(this.state.commentState === 2) {
			return <button className="disabled">已评价</button>
		} else {
			return ''
		}
	}

	showComment() {
		this.setState({
			commentState: 1
		})
	}

	cancelComment() {
		this.setState({
			commentState: 0
		})
	}

	handleSubmit() {
		const submitComment = this.props.submitComment;
		const id = this.props.data.id,
			  comment = this.tx.value.trim();
		if (comment) {
			submitComment(id, comment, this.commentSuccess)
		}
	}

	commentSuccess() {
		this.setState({
			commentState: 2
		})
	}

	render() {
		const data = this.props.data;
		return (
			<div className="orderitem-container">
				<div className="content-wrap">
					<div className="shop-wrap">
						<img src={data.img} alt={data.title} />
					</div>
					<div className="desc-wrap">
						<p>商户：<span>{data.title}</span></p>
						<p>数量：<span>{data.count}</span></p>
						<p>价格：¥ <span>{data.price}</span></p>
					</div>
					{
						this.showCommentBtn()
					}
				</div>
				{
					this.state.commentState === 1
					? (
						<div className="comment-wrap">
							<textarea ref={(tx) => this.tx=tx} />
							<div className="oper-wrap">
								<button onClick={this.handleSubmit}>提交</button>
								<button className="cancel" onClick={this.cancelComment}>取消</button>
							</div>
						</div>
						)
					: ''
				}
			</div>
		);
	}
}

export default OrderItem