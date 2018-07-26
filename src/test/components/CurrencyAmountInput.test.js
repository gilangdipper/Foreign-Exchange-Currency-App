import React from 'react';
import CurrencyAmountInput from '../../component/CurrencyAmountInput';
import { Input } from 'antd';

describe('<CurrencyAmountInput />', () => {
  const baseProps = {
    amount: 1,
		removeCurrency: _ => _
	};
	
	const ComponentBase = props =>
    shallow(<CurrencyAmountInput {...baseProps} {...props} />);

  it('Should set amout value from props', () => {
    expect(ComponentBase().find(Input).prop('value')).toBe(1);
  });
});
2