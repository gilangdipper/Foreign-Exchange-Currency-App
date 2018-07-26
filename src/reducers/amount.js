import { ADD_CURR_VALUE } from '../constants/ActionTypes';

const initialState = 1;

export default function amount(state = initialState, action) {
  switch (action.type) {
		case ADD_CURR_VALUE:
      return action.value

    default:
      return state
  }
};
