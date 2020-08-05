import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import Count from './Counter/Count';
import { ReactComponent as Decoration } from '../../assets/leet_decoration.svg';

const PrimaryCountersStructure = ({ children, className }) => {
  return (
    <div className={className}>
      <Decoration />
      {children}
      <Decoration />
    </div>
  );
};

const PrimaryCounters = styled(PrimaryCountersStructure)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;

  color: ${({ theme }) => theme.palette.secondary.lighter};

  ${Count} {
    font-size: ${({ theme }) => theme.typography.sizes[900]};
  }

  svg {
    :first-child {
      transform: rotate(-180deg);
    }
  }
`;

PrimaryCountersStructure.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default PrimaryCounters;
