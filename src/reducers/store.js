import Immutable from 'immutable'
import * as actionTypes from '@/constants/store'

const initialState = Immutable.List([]);

export default function store(state = initialState, action) {
	switch(action.type) {
		case actionTypes.STORE_ADD:
			return state.unshift(action.data);
		case actionTypes.STORE_RM:
			return state.filter(x => x.id !== action.data.id);
		default:
			return state;
	}
}