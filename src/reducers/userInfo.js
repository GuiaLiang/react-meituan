import Immutable from 'immutable'
import * as actionTypes from '../constants/userInfo'

const initialState = Immutable.Map({cityName: '', username: ''})

export default function userInfo(state = initialState, action) {
	switch(action.type) {
		case actionTypes.USERINFO_UPDATE:
			return state.set('cityName',action.data.cityName);
		case actionTypes.USERINFO_USER_LOGIN:
			return state.set('username', action.data.username);
		default:
			return state;
	}
}