import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const OptionSeparatorStructure = ({ className }) => {
  return <span className={className}>/</span>;
};

const OptionSeparator = styled(OptionSeparatorStructure)`
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  opacity: 0.5;
`;

OptionSeparatorStructure.propTypes = {
  className: PropTypes.string,
};

export default OptionSeparator;
