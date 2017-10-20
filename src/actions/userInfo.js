import * as actionTypes from '../constants/userInfo'

export function update(data) {
	return {
		type: actionTypes.USERINFO_UPDATE,
		data
	}
}

export function login(data) {
	return {
		type: actionTypes.USERINFO_USER_LOGIN,
		data
	}
}