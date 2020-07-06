import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import Link from './generic/Link';

import { SERVER } from '../constants/routes';

/**
 * Front page of the application.
 */
const FrontpageStructure = ({ className }) => {
  return (
    <div className={className}>
      <h1>Leetbot Stats</h1>

      <Link to={SERVER}>Browse servers</Link>
    </div>
  );
};

const Frontpage = styled(FrontpageStructure)``;

FrontpageStructure.propTypes = {
  className: PropTypes.string,
};

export default Frontpage;
