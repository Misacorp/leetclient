import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';

import LoadedContent from '../generic/LoadedContent';
import Messages from './Messages/Messages';
import EntitySummary from '../generic/EntitySummary';
import BackLink from '../generic/BackLink';
import NarrowContainer from '../generic/Containers/NarrowContainer';

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
    <NarrowContainer className={className}>
      <BackLink to={`${ROOT}${SERVER}/${serverId}`}>Server</BackLink>

      <LoadedContent url={URL} errorMessage="Error fetching user">
        {(data) => {
          const user = new UserObject(data);

          return (
            <div className={className}>
              <EntitySummary
                name={user.name}
                avatarUrl={user.avatarUrl}
                counts={user.counts}
                messages={user.messages}
              />

              <Messages messages={user.messages} />
            </div>
          );
        }}
      </LoadedContent>
    </NarrowContainer>
  );
};

const User = styled(UserStructure)``;

UserStructure.propTypes = {
  className: PropTypes.string,
};

export default User;
