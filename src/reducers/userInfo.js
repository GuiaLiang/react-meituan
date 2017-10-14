import Immutable from 'immutable'
import * as actionTypes from '../constants/userInfo'

const initialState = Immutable.Map({cityName: ''})

export default function userInfo(state = initialState, action) {
	switch(action.type) {
		case actionTypes.USERINFO_UPDATE:
			return state.set('cityName',action.data.cityName);
		default:
			return state;
	}
}