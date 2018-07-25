import React, { Component } from 'react';
import styled from 'styled-components';
import configCurrencies from '../config/currencies.json'
import { Button } from 'antd';
import PropTypes from 'prop-types';

const CardWrapper = styled.div`
  padding: 16px 16px 0 16px;
`;

const Card = styled.div`
	border: 1px solid #aaa;
	margin-bottom: 14px;
	border-radius: 4px;
	display: flex;
	background-color: #fff;
`;

const TitleRate = styled.div`
	display: flex;
	font-size: 24px;

	.left {
		flex-grow: 1;
	}
	.right {
		flex-grow: 9;
		text-align: right;
	}
`;

const LeftContent = styled.div`
	padding: 6px;
	width: 90%;
`;

const RightContent = styled.div`
	align-items: center;
	width: 11%;

	.ant-btn {
		height: 100%;
		width: 100%;
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;

		.anticon {
			color: red;
		}
	}
`;

const Description = styled.div`
	font-size: 16px;
	font-weight: 700;
	font-style: italic; 
`;

const CurrencyConverted =styled.div`
	font-size: 18px;
	font-style: italic; 
`;

class CurrenciesCard extends Component {
	static propTypes = {
    amount: PropTypes.number,
    currency: PropTypes.array,
    removeCurrency: PropTypes.func
  };

	renderlistCurrencies = () => {
		const { currency, amount, removeCurrency } = this.props;
		const convertAmount = rate => (rate*amount).toFixed(2);

		return currency.map((item, index) => 
			<Card key={index}>
				<LeftContent>
					<TitleRate>
						<div className='left'>
							{item.id}
						</div>
						<div className='right'>
							{convertAmount(item.rate)}
						</div>
					</TitleRate>
					<Description>
						{`${item.id} - ${configCurrencies.description[item.id]}`}
					</Description>
					<CurrencyConverted>
						{`1 USD = ${item.rate} ${item.id}`}
					</CurrencyConverted>
				</LeftContent>
				<RightContent>
					<Button 
						icon="minus-circle"
						size='large'
						onClick={()=> removeCurrency(item.id)} 
					/>
				</RightContent>
			</Card>
		);
	};

  render() {
    return (
      <CardWrapper>
				{this.renderlistCurrencies()}
			</CardWrapper> 
    );
  }
}

export default CurrenciesCard;
