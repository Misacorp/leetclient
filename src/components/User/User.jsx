import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import LoadedContent from '../generic/LoadedContent';
import Messages from './Messages/Messages';
import UserSummary from './UserSummary';
import BackLink from '../generic/BackLink';

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
      <BackLink to={`${ROOT}${SERVER}/${serverId}`}>Server</BackLink>

      <LoadedContent url={URL} errorMessage="Error fetching user">
        {(data) => {
          const user = new UserObject(data);

          return (
            <div className={className}>
              <UserSummary user={user} />

              <Messages messages={user.messages} />
            </div>
          );
        }}
      </LoadedContent>
    </div>
  );
};

const User = styled(UserStructure)`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  padding: 0.5rem;
`;

UserStructure.propTypes = {
  match: PropTypes.object,
  className: PropTypes.string,
};

export default User;
