import React, { Component } from 'react'
import ReactSwipe from 'react-swipe'
import { Link } from 'react-router-dom'

import './style.less'

class Category extends Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 0
		}
	}

	render() {
		let opt = {
			auto: 2000,
			callback: (index) => {
				this.setState({
					index
				})
			}
		};
		return (
			<div className="carousel-container">
				<ReactSwipe className="carousel" swipeOptions={opt}>
					<div>
						<ul className="item">
							<Link to="/search/ribencai"><li className="ribencai">日本菜</li></Link>
							<Link to="/search/SPA"><li className="SPA">SPA</li></Link>
							<Link to="/search/jiehun"><li className="jiehun">结婚</li></Link>
							<Link to="/search/xuexipeixun"><li className="xuexipeixun">学习培训</li></Link>
							<Link to="/search/xican"><li className="xican">西餐</li></Link>
							<Link to="/search/huochejipiao"><li className="huochejipiao">火车机票</li></Link>
							<Link to="/search/shaokao"><li className="shaokao">烧烤</li></Link>
							<Link to="/search/jiazhuang"><li className="jiazhuang">家装</li></Link>
							<Link to="/search/chongwu"><li className="chongwu">宠物</li></Link>
							<Link to="/search/quanbufenlei"><li className="quanbufenlei">全部分类</li></Link>
						</ul>
					</div>
					<div>
						<ul className="item">
							<Link to="/search/meishi"><li className="meishi">美食</li></Link>
							<Link to="/search/dianying"><li className="dianying">电影</li></Link>
							<Link to="/search/jiudian"><li className="jiudian">酒店</li></Link>
							<Link to="/search/xuixianyule"><li className="xuixianyule">休闲娱乐</li></Link>
							<Link to="/search/waimai"><li className="waimai">外卖</li></Link>
							<Link to="/search/huoguo"><li className="huoguo">火锅</li></Link>
							<Link to="/search/liren"><li className="liren">丽人</li></Link>
							<Link to="/search/dujiachuxing"><li className="dujiachuxing">度假出行</li></Link>
							<Link to="/search/zuliaoanmo"><li className="zuliaoanmo">足疗按摩</li></Link>
							<Link to="/search/zhoubianyou"><li className="zhoubianyou">周边游</li></Link>
						</ul>
					</div>
					<div>
						<ul className="item">
							<Link to="/search/jingdian"><li className="jingdian">景点</li></Link>
							<Link to="/search/ktv"><li className="ktv">KTV</li></Link>
							<Link to="/search/gouwu"><li className="gouwu">购物</li></Link>
							<Link to="/search/shenghuofuwu"><li className="shenghuofuwu">生活服务</li></Link>
							<Link to="/search/jianshenyundong"><li className="jianshenyundong">健身运动</li></Link>
							<Link to="/search/meifa"><li className="meifa">美发</li></Link>
							<Link to="/search/qinzi"><li className="qinzi">亲子</li></Link>
							<Link to="/search/xiaochikuaican"><li className="xiaochikuaican">小吃快餐</li></Link>
							<Link to="/search/zizhucan"><li className="zizhucan">自助餐</li></Link>
							<Link to="/search/jiuba"><li className="jiuba">酒吧</li></Link>
						</ul>
					</div>
				</ReactSwipe>
				<div className="show-spot">
					<span className={ 
								0 === this.state.index? 'selected' : '' }
					></span>
					<span className={ 
								1 === this.state.index? 'selected' : '' }
					></span>
					<span className={ 
								2 === this.state.index? 'selected' : '' }
					></span>
				</div>
			</div>
		)
	}
}

export default Category