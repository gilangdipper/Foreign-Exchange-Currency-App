import React, { Fragment } from 'react';
import CurrencyOption from '../../component/CurrencyOption';
import { OptionWrapper } from '../../component/CurrencyOption';
import { Button } from 'antd';

describe('<CurrencyOption />', () => {
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
		

  it('Should be render button "Add More Curencie"', () => {
    expect(ComponentBase().find(OptionWrapper).find(Button).prop('children')).toBe('Add More Curencies');
	});

	it('Should be render button submit the Currency if shouldShowFrom state is true', () => {
    expect(ComponentBase().setState({ shouldShowFrom: true }).find(OptionWrapper).find(Button).prop('children')).toBe('Submit');
	});
});
