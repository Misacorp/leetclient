import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';

import LoadedContent from '../generic/LoadedContent';
import Messages from './Messages/Messages';
import UserSummary from './UserSummary';
import BackLink from '../generic/BackLink';

import UserObject from '../../types/User/UserObject';
import { ROOT, SERVER } from '../../constants/routes';

/**
 * Homepage for a single user.
 */
const UserStructure = ({ className }) => {
  const match = useRouteMatch();

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
  className: PropTypes.string,
};

export default User;
