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
    color: #1890ff;
	}
	.ant-input-group-addon {
    font-size: 24px
    font-weight: 800;
    color: #1890ff;
	}
`;

class CurrencyAmountInput extends Component {
  static propTypes = {
    amount: PropTypes.number,
    setAmount: PropTypes.func
  };

  handleNumberChange = (e) => {
    const number = parseInt(e.target.value || 0, 10);
    if (isNaN(number)) {
      return;
    }
		this.props.setAmount(number);
  }

  render() {
    const { amount } = this.props;
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