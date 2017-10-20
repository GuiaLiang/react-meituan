import './static/js/flexible'

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import './static/css/common.less'
import './static/css/font.css'

import App from './containers'
import configStore from './store/configStore'

import RouteMap from '@/router/routeMap'

let store = configStore();

// <App>
// 			<Home />
// 		</App>

// App组件主要作用是用于全局的数据初始化操作
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));

registerServiceWorker();
