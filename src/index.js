import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import './static/css/common.less'
import './static/css/font.css'
import './static/js/flexible'
import App from './containers'
import configStore from './store/configStore'

import Home from './containers/Home'

let store = configStore();
// import 'whatwg-fetch'

ReactDOM.render(
	<Provider store={store}>
		<App>
			<Home />
		</App>
	</Provider>
	, document.getElementById('root'));

// fetch('/api/home', {
// 	credentials: 'include',
// 	headers: {
// 		'Accept': 'application/json, text/plain, */*'
// 	}
// }).then(res => {
// 	return res.json();
// }).then(data => console.log(data.name))

registerServiceWorker();
