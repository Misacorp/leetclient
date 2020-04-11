import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import LoadedContent from '../generic/LoadedContent';

import UserObject from '../../types/User/UserObject';
import { ROOT, SERVER } from '../../constants/routes';

/**
 * Homepage for a single user.
 */
const UserStructure = ({ match, className }) => {
  const { serverId, userId } = match.params;
  const URL = `${process.env.REACT_APP_API_URL}/users/${userId}`;

  return (
    <div className={className}>
      <Link to={`${ROOT}${SERVER}/${serverId}`}>Server</Link>

      <h1>User {userId}</h1>

      <LoadedContent url={URL} errorMessage="Error fetching user">
        {(data) => {
          const user = new UserObject(data);

          return (
            <div className={className}>
              <p>{user.tag}</p>
              <h1>{user.name}</h1>
            </div>
          );
        }}
      </LoadedContent>
    </div>
  );
};

const User = styled(UserStructure)``;

UserStructure.propTypes = {
  match: PropTypes.object,
  className: PropTypes.string,
};

export default User;
