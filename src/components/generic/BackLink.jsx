import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Link from './Link';
import { ReactComponent as BackTriangle } from '../../assets/back_triangle.svg';

/**
 * Link with a left-pointing triangle
 */
const BackLinkStructure = ({ to, className, children }) => {
  return (
    <Link to={to} className={className}>
      <BackTriangle />
      {children}
    </Link>
  );
};

const BackLink = styled(BackLinkStructure)`
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  svg {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

BackLinkStructure.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default BackLink;
