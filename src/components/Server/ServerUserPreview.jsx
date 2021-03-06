import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';

import Link from '../generic/Link';
import Progress from '../generic/Progress';

import { USER } from '../../constants/routes';
import UserSummaryObject from '../../types/User/UserSummaryObject';

/**
 * Preview of a user on a server
 */
const ServerUserPreviewStructure = ({ user, index, max, className }) => {
  const match = useRouteMatch();

  return (
    <Link to={`${match.url}/${USER}/${user.id}`} className={className}>
      <h4>
        {index + 1}. {user.name}
      </h4>

      <Progress value={user.counts?.LEET} max={max} />
    </Link>
  );
};

const ServerUserPreview = styled(ServerUserPreviewStructure)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;

  margin-bottom: 4px;
  padding: 0.5em 1rem;
  background-color: #00000033;
  align-items: center;

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

  h4 {
    margin: 0;
  }
`;

ServerUserPreviewStructure.propTypes = {
  user: PropTypes.instanceOf(UserSummaryObject).isRequired,
  index: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default ServerUserPreview;
