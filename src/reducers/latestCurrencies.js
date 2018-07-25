import { SET_CURR } from '../constants/ActionTypes'

const initialState = [];

export default function latestCurrencies(state = initialState, action) {
  switch (action.type) {
		case SET_CURR:
      return {
        ...state,
        latestCurrencies: action.currencies
			}
			
    default:
      return state
  }
}
