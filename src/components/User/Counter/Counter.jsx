import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Count from './Count';
import CountType from './CountType';

import decodeMessageType from '../../../util/decodeMessageType';

/**
 * Displays a counter for a given message type.
 * @prop {string} type   Message type
 * @prop {number} amount Number to display
 */
const CounterStructure = ({ type, amount = 0, className }) => {
  return (
    <p className={className}>
      <Count>{amount}</Count>
      <CountType>{decodeMessageType(type)}s</CountType>
    </p>
  );
};

const Counter = styled(CounterStructure)`
  text-align: center;
`;

CounterStructure.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number,
  className: PropTypes.string,
};

export default Counter;
