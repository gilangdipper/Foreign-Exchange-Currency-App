import { ADD_CURR, REMOVE_CURR } from '../constants/ActionTypes';

const initialState = [
	{ id: 'IDR', rate: 14517.4978577549 },
	{ id: 'EUR', rate: 0.8568980291 },
	{ id: 'GBP', rate: 0.7664524422 },
	{ id: 'SGD', rate: 1.3676092545 }
];

export default function currencies(state = initialState, action) {
  switch (action.type) {
    case ADD_CURR:
      return [
        ...state,
        {
					id: action.currency.id,
					rate: action.currency.rate
				}
			]

    case REMOVE_CURR:
			return [
        ...(state.filter(currency =>
					currency.id !== action.id
				))
			]

    default:
      return state
  }
};
