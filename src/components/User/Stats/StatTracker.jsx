import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import StatNumber from './StatNumber';

/**
 * Tracks arbitrary stats
 * @param {number} amount Amount of a given stat
 */
const StatTrackerStructure = ({ amount, className, children }) => {
  return (
    <p className={className}>
      <StatNumber>{amount}</StatNumber>
      {children}
    </p>
  );
};

const StatTracker = styled(StatTrackerStructure)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;

  margin-top: 0;
  margin-bottom: 0.5rem;
  padding: 0 1rem;
`;

StatTrackerStructure.propTypes = {
  amount: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default StatTracker;
