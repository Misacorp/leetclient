import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import Link from './generic/Link';
import NarrowContainer from './generic/Containers/NarrowContainer';

import { SERVER } from '../constants/routes';

/**
 * Front page of the application.
 */
const FrontpageStructure = ({ className }) => {
  return (
    <NarrowContainer className={className}>
      <h1>Leetbot Stats</h1>

      <Link to={SERVER}>Browse servers</Link>
    </NarrowContainer>
  );
};

const Frontpage = styled(FrontpageStructure)`
  text-align: center;

  ${Link} {
    display: block;
    width: 100%;
    padding: 2rem 1rem;
    background-color: #00000033;

    &,
    &:visited {
      color: ${({ theme }) => theme.palette.typography.light};
    }

    &:focus,
    &:active,
    &:hover {
      color: ${({ theme }) => theme.palette.typography.light};
      background-color: ${({ theme }) => theme.palette.primary.main}80;
    }
  }
`;

FrontpageStructure.propTypes = {
  className: PropTypes.string,
};

export default Frontpage;
