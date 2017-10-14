import 'whatwg-fetch'

function obj2Params(obj) {
	var result = '';
	for(let item in obj) {
		result += '&' + item + '=' + encodeURIComponent(obj[item]);
	}

	return result.slice(1);
}

export default function post(url, params) {
	return fetch(url, {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: obj2Params(params)
	});
}