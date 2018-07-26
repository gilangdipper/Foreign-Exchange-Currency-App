import * as actions from '../../actions';

describe('Actions', () => {
  it('Should generate a ADD_CURR action', () => {
		expect(actions.addCurrency({'id': 'AUD', 'rate': 12345})).toMatchObject({
			"currency": {'id': 'AUD', 'rate': 12345}, 
			"type": "ADD_CURR"
		});
	});

	it('Should generate a SET_CURR action', () => {
		expect(actions.setLatestCurrencies([{'id': 'AUD', 'rate': 12345}])).toMatchObject({
			"currencies": [{'id': 'AUD', 'rate': 12345}], 
			"type": "SET_CURR"
		});
	});

	it('Should generate a ADD_CURR_VALUE action', () => {
		expect(actions.setAmount('tes')).toMatchObject({
			"value": "tes", 
			"type": "ADD_CURR_VALUE"
		});
	});

	it('Should generate a REMOVE_CURR action', () => {
		expect(actions.removeCurrency('IDR')).toMatchObject({
			"id": "IDR", 
			"type": "REMOVE_CURR"
		});
	});
});



