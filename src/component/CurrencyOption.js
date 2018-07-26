import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Select, Button } from 'antd';
import PropTypes from 'prop-types';
import configCurrencies from '../config/currencies.json';

const Option = Select.Option;

export const OptionWrapper = styled.div`
	display: flex;
	padding: 0 16px 16px 16px;

	.ant-btn {
		width: 100%;
		text-align: left;
		font-size: 16px;
	}

	.left {
		flex-grow: 9;
		.ant-select {
			width: 100%!important;
		}
	}
	.right {
		flex-grow: 1;
		text-align: right;
		padding-left: 6px;
		.ant-btn {
			text-align: center;
		}
	}
`;

class CurrenciesOption extends Component {
	static propTypes = {
    currency: PropTypes.array,
    latestCurrencies: PropTypes.array,
    addCurrency: PropTypes.func
  };

	state= {
		currency: '',
		shouldShowFrom: false
	};
	
	renderOption = () => {
		const { currency, latestCurrencies } = this.props;
		const keyCurrency = currency.map(curr => curr.id);
		const filteredCurrency = latestCurrencies
			.filter(item => {
				if (item.id === 'USD') return false;
				return !(keyCurrency.includes(item.id));
			});

		return filteredCurrency.map((item, index) => 
			<Option key={index} value={item.id}>
				{`${item.id} - ${configCurrencies.description[item.id]}`}
			</Option>
		);
	};

	handleClick = () => {
		const { latestCurrencies, addCurrency } = this.props;
		const { currency } = this.state;
		if(currency) {
			const newCurrency = 
				latestCurrencies.find(item => item.id === currency);
			addCurrency(newCurrency);
			this.setState({ currency: '', shouldShowFrom: false });
		}
	};

	handleCurrencyChange = currency =>
		this.setState({ currency });

  render() {
    return (
      <OptionWrapper>
				{!this.state.shouldShowFrom
					? <Button 
							type="primary" 
							icon="plus-circle" 
							onClick={() => this.setState({ shouldShowFrom: true })}
						>
							Add More Curencies
						</Button>
					: <Fragment>
							<div className='left'>
								<Select
									value={this.state.currency}
									style={{ width: '32%' }}
									onChange={this.handleCurrencyChange}
								>
									{this.renderOption()}
								</Select>
							</div>
							<div className='right'>
								<Button 
									type="primary" 
									icon="plus-circle-o" 
									onClick={this.handleClick}
								>
									Submit
								</Button>
							</div>
						</Fragment>
				}
      </OptionWrapper>
    );
  };
};

export default CurrenciesOption;