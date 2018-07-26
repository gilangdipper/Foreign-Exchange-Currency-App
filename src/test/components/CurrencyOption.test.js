import React, { Fragment } from 'react';
import CurrencyOption from '../../component/CurrencyOption';
import { OptionWrapper } from '../../component/CurrencyOption';
import { Button } from 'antd';

describe('<CurrenciesCard />', () => {
  const baseProps = {
    amount: 1,
    currency: [
			{'id': 'AUD', 'rate': 12345}, 
			{'id': 'IDR', 'rate': 12345}
		],
		latestCurrencies: [
			{'id': 'AUD', 'rate': 12345}, 
			{'id': 'IDR', 'rate': 12345}
		],
		addCurrency: _ => _
  };

  const ComponentBase = props =>
		shallow(<CurrencyOption {...baseProps} {...props} />);
		

  it('Should be render Currency card if there ara Currency data', () => {
    expect(ComponentBase().find(OptionWrapper).find(Button).prop('children')).toBe('Add More Curencies');
	});
});
