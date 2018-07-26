import React from 'react';
import CurrenciesCard from '../../component/CurrenciesCard';
import { CardWrapper, TitleRate } from '../../component/CurrenciesCard';

describe('<CurrenciesCard />', () => {
  const baseProps = {
    amount: 1,
    currency: [
			{'id': 'AUD', 'rate': 12345}, 
			{'id': 'IDR', 'rate': 12345}
		],
		setAmount: _ => _
  };

  const ComponentBase = props =>
    shallow(<CurrenciesCard {...baseProps} {...props} />);

  it('Should be render Currency card if there ara Currency data', () => {
    expect(ComponentBase().find(CardWrapper).prop('children')).toHaveLength(2);
	});
	it('Should be render Currency name', () => {
    expect(ComponentBase().find(TitleRate).at(0).find('.left').prop('children')).toBe('AUD');
	});
	it('Should be render Currency rate', () => {
    expect(ComponentBase().find(TitleRate).at(0).find('.right').prop('children')).toBe("12345.00");
  });
});
