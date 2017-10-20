import get from '../get'

export function getSearchData(cityName, category, keyword, page) {
	return get(`/api/search/${encodeURIComponent(cityName)}/${encodeURIComponent(category)}/${encodeURIComponent(keyword)}/${page}`)
}