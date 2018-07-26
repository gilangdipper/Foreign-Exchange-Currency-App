import React from 'react';
import App from '../../component/App';
import { Layout } from 'antd';

describe('<App />', () => {
  const baseProps = {
    amount: 1,
    currency: [],
    setCurrencies: _ => _,
    latestCurrencies: [],
    setAmount: _ => _, 
    addCurrency: _ => _,
    removeCurrency: _ => _
  };

  const ComponentBase = props =>
    shallow(<App {...baseProps} {...props} />);

  it('Should be render App.js', () => {
    expect(ComponentBase().find(Layout).exists()).toBe(true);
  });
});
