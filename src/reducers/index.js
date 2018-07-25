import { combineReducers } from 'redux';
import currencies from './currencies';
import amount from './amount';
import latestCurrencies from './latestCurrencies';


const rootReducer = combineReducers({
    amount,
    currencies,
    latestCurrencies
})

export default rootReducer
