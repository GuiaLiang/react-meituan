import Immutable from 'immutable'
import * as actionTypes from '@/constants/store'

const initialState = Immutable.List([]);

export default function store(state = initialState, action) {
	switch(action.type) {
		case actionTypes.STORE_ADD:
			return state.set(state.size, action.data);
		case actionTypes.STORE_RM:
			return state.filter(x => x !== action.data);
		default:
			return state;
	}
}