import React, { Component } from 'react';
import { Input } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputWrapper = styled.div`
  display: flex;

  .ant-input-group-wrapper {
    margin: 0!important;
  }
	.ant-input {
		text-align: right;
		font-size: 24px
    height: 50px;
    font-weight: 800;
	}
	.ant-input-group-addon {
    font-size: 24px
    font-weight: 800;
	}
`;

class CurrencyAmountInput extends Component {
  static propTypes = {
    amount: PropTypes.number,
    setAmount: PropTypes.func
  };

  state= {
		amount: 0
	}

  componentWillReceiveProps(nextProps) {
    if (nextProps.amount > 0) {
      this.setState({amount: nextProps.amount});
		}
  }

  handleNumberChange = (e) => {
    const number = parseInt(e.target.value || 0, 10);
    if (isNaN(number)) {
      return;
    }
		this.setState({ amount: number });
		this.props.setAmount(number);
  }

  render() {
    const { amount } = this.state;
    return (
      <InputWrapper>
        <Input
          addonBefore='USD'
          type="text"
          value={amount}
          onChange={this.handleNumberChange}
          style={{ marginRight: '3%' }}
        />
      </InputWrapper>
    );
  }
}

export default CurrencyAmountInput;