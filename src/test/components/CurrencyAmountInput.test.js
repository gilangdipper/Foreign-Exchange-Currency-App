import React from 'react';
import CurrencyAmountInput from '../../component/CurrencyAmountInput';
import { Input } from 'antd';

describe('<CurrenciesCard />', () => {
  const baseProps = {
    amount: 1,
		removeCurrency: _ => _
	};
	
	const ComponentBase = props =>
    shallow(<CurrencyAmountInput {...baseProps} {...props} />);

  it('Should be render Currency card if there ara Currency data', () => {
    expect(ComponentBase().find(Input).prop('value')).toBe(0);
  });
});
2