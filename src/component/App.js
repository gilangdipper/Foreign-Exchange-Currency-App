import React, { Component } from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import CurrencyCard from './CurrenciesCard';
import CurrencyAmountInput from './CurrencyAmountInput';
import CurrencyOption from './CurrencyOption';
import PropTypes from 'prop-types';

const { Content } = Layout;

const Container = styled.div`
  width: 100%;
  max-width: 480px;
  height: auto;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-bottom: 2px solid #aaa;
`;

const Title = styled.div`
  font-size: 18px;
  font-style: italic; 
  font-weight: 700;
`;

class App extends Component {
  static propTypes = {
    amount: PropTypes.number,
    currency: PropTypes.array,
    setCurrencies: PropTypes.func,
    latestCurrencies: PropTypes.array,
    setAmount: PropTypes.func,
    addCurrency: PropTypes.func,
    removeCurrency: PropTypes.func
  };

  componentWillMount() {
    fetch('https://exchangeratesapi.io/api/latest?base=USD')
      .then(response => response.json())
      .then(data => {
        const latestCurrencies = this.getCurrencyFormated(data);
        this.props.setCurrencies(latestCurrencies);
			});
	};
	
	getCurrencyFormated = data => 
    Object.keys(data.rates).map(key => {
      return {
        id: key,
        rate: data.rates[key]
      }
    });

  render() {
    const {
      currency,
      latestCurrencies,
      amount,
      setAmount,
      addCurrency,
      removeCurrency
    } = this.props;

    return (
      <Container>
        <Layout>
          <Header>
            <Title>
              USD - United State Dollars
            </Title>
            <CurrencyAmountInput 
              amount={amount}
              setAmount={setAmount}
            />
          </Header>
          <Content>
            <CurrencyCard 
              amount={amount}
              currency={currency}
              removeCurrency={removeCurrency}
            />
            <CurrencyOption 
              currency={currency}
              latestCurrencies={latestCurrencies}
              addCurrency={addCurrency}
            />
          </Content>
        </Layout>
      </Container>
    );
  };
};

export default App;
