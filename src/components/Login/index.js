import React, { Component } from 'react'

import './style.less'

class LoginComponent extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			checkCode: '',
			checkingCode: false
		}

		this.handleUsernameChange = this.handleUsernameChange.bind(this)

		this.handleCodeClick = this.handleCodeClick.bind(this)

		this.handleCheckCodeChange = this.handleCheckCodeChange.bind(this)

		this.handleLoginClick = this.handleLoginClick.bind(this)
	}

	componentWillUnmount() {
		if(this.timer) {
			clearInterval(this.timer)
		}
	}

	handleUsernameChange(e) {
		this.setState({
			username: e.target.value
		})
	}

	handleTimeout() {
		let times = 6;
		this.timer = setInterval(() => {
			if(times <= 0) {
				clearInterval(this.timer);
				this.btn.textContent = `发送验证码`;
				this.setState({
					checkingCode: false
				})
				this.timer = null;
				return
			}

			this.btn.textContent = `${times}后重新发送`;
			times--;

		}, 1000)
	}

	handleCodeClick(e) {
		this.setState({
			checkingCode: true
		})

		if(!this.timer) {
			this.handleTimeout();
		}
	}

	handleCheckCodeChange(e) {
		this.setState({
			checkCode: e.target.value
		})
	}

	handleLoginClick() {
		if(this.state.username && this.state.checkCode) {
			this.props.handleLogin(this.state.username, this.state.checkCode);
		}
	}

	render() {
		return (
			<div className="login-container">
				<div className="tel-wrap">
					<i className="icon-tablet"></i>
					<input type="text" placeholder="输入手机号" 
						value={this.state.username}
						onChange={this.handleUsernameChange} />
				</div>
				<div className="checkcode-wrap">
					<i className="icon-key"></i>
					<input type="text" placeholder="输入验证码"
						value={this.state.checkCode}
						onChange={this.handleCheckCodeChange} />
					<button ref={(btn) => this.btn=btn} className={this.state.checkingCode?"send":"unsend"}
						onClick={this.handleCodeClick}
					>
						发送验证码
					</button>
				</div>
				<button className="login-btn" onClick={this.handleLoginClick}>登录</button>
			</div>
		);
	}
}

export default LoginComponent