import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';

import Link from '../generic/Link';

import { USER } from '../../constants/routes';
import UserSummaryObject from '../../types/User/UserSummaryObject';

/**
 * Preview of a user on a server
 */
const ServerUserPreviewStructure = ({ user, index, className }) => {
  const match = useRouteMatch();

  return (
    <div className={className}>
      <h4>
        {index + 1}. {user.name}
      </h4>

      {user.counts?.LEET > 0 && <p>Leets: {user.counts?.LEET}</p>}

      {user.counts?.LEEB > 0 && <p>Leebs: {user.counts?.LEEB}</p>}

      {user.counts?.FAILED_LEET > 0 && (
        <p>Failed leets: {user.counts?.FAILED_LEET}</p>
      )}

      <Link to={`${match.url}/${USER}/${user.id}`}>Inspect</Link>
    </div>
  );
};

const ServerUserPreview = styled(ServerUserPreviewStructure)`
  padding: 1rem;
  background-color: ${({ theme }) => theme.palette.primary.darker}80;
  margin-bottom: 1rem;

  h4 {
    margin: 0;
  }
`;

ServerUserPreviewStructure.propTypes = {
  user: PropTypes.instanceOf(UserSummaryObject).isRequired,
  index: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default ServerUserPreview;
