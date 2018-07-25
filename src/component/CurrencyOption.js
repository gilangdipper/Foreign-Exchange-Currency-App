import React, { Component } from 'react';
import styled from 'styled-components';
import { Select, Button } from 'antd';

const Option = Select.Option;

const OptionWrapper = styled.div`
	display: flex;
	padding: 16px 16px 0 16px;

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
			width: 100%;
		}
	}
`;

class CurrencyOption extends Component {

	state= {
		currency: ''
	}
	
	renderOption = () => {
		const { currency, latestCurrencies } = this.props;
		const keyCurrency = currency.map(curr => curr.id);
		const filteredCurrency = latestCurrencies
			.filter(item => {
				if (item.id === 'USD') return false;
				return !(keyCurrency.includes(item.id));
			});

		return filteredCurrency.map((item, index) => 
			<Option key={index} value={item.id}>{item.id}</Option>
		)
	}

	handleClick = () => {
		const { latestCurrencies, addCurrency } = this.props;
		const { currency } = this.state;
		if(currency) {
			const newCurrency = latestCurrencies.find(item => item.id === currency);
			addCurrency(newCurrency);
			this.setState({ currency: '' });
		}
	}

	handleCurrencyChange = currency => {
		this.setState({ currency });
	}

  render() {
    return (
      <OptionWrapper>
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
					<Button type="primary" onClick={this.handleClick}>Submit</Button>
				</div>
      </OptionWrapper>
    );
  }
}

export default CurrencyOption;