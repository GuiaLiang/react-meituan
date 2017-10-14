import get from '../get'

export function getAdData() {
	return get('/api/homead');
}

export function getListData(cityName, page) {
	return get('/api/homelist/' + encodeURIComponent(cityName) + '/' + page)
}