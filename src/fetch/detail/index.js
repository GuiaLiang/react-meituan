import get from '../get'

export function getInfoData(id) {
	return get('/api/detail/' + id);
}

export function getCommentData(id, page) {
	return get('/api/detail/comment/' + id + '/' + page);
}