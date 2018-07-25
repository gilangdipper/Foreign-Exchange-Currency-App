import { connect } from 'react-redux';
import App from '../component/App';
import { 
  setLatestCurrencies, 
  setAmount, 
  addCurrency, 
  removeCurrency 
} from '../actions';

const mapStateToProps = (state) => ({
  amount: state.amount,
	currency: state.currencies,
	latestCurrencies: state.latestCurrencies
});

const mapDispatchToProps = {
  setCurrencies: setLatestCurrencies,
  setAmount,
  addCurrency,
  removeCurrency
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
