import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const padding = '0';

const ProgressStructure = ({ value, className }) => {
  return <div className={className}>{value}</div>;
};

const Progress = styled(ProgressStructure)`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.primary.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${({ theme }) => theme.palette.typography.light};
  z-index: 1;

  ::before {
    content: '';
    display: block;
    position: absolute;
    left: ${padding};
    top: ${padding};
    bottom: ${padding};
    width: ${({ value, max }) => (value / max) * 100}%;
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-right: 2px solid ${({ theme }) => theme.palette.primary.light};
    box-sizing: border-box;
    z-index: -1;
  }
`;

ProgressStructure.propTypes = {
  value: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default Progress;
