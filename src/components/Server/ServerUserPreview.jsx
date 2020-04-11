import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { USER } from '../../constants/routes';
import UserSummaryObject from '../../types/User/UserSummaryObject';

/**
 * Preview of a user on a server
 */
const ServerUserPreviewStructure = ({ match, user, className }) => {
  return (
    <div className={className}>
      <h4>{user.name}</h4>

      {user.counts?.LEET > 0 && <p>Leets: {user.counts?.LEET}</p>}

      {user.counts?.LEEB > 0 && <p>Leebs: {user.counts?.LEEB}</p>}

      {user.counts?.FAILED_LEET > 0 && (
        <p>Failed leets: {user.counts?.FAILED_LEET}</p>
      )}

      <NavLink to={`${match.url}/${USER}/${user.id}`}>Inspect</NavLink>
    </div>
  );
};

const ServerUserPreview = styled(ServerUserPreviewStructure)`
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.16);
  background-color: #f7f7f7;

  h4 {
    margin: 0;
  }
`;

ServerUserPreviewStructure.propTypes = {
  match: PropTypes.object,
  user: PropTypes.instanceOf(UserSummaryObject).isRequired,
  className: PropTypes.string,
};

export default ServerUserPreview;
