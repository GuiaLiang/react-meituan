import 'whatwg-fetch'

export default function(url) {
	return fetch(url, {
		credentials: 'include',
		headers: {
			'Accept': 'application/json, text/plain, */*'
		}
	});
}