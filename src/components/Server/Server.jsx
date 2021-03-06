import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';

import BackLink from '../generic/BackLink';
import LoadedContent from '../generic/LoadedContent';
import ServerUserPreview from './ServerUserPreview';
import EntitySummary from '../generic/EntitySummary';
import NarrowContainer from '../generic/Containers/NarrowContainer';

import * as routes from '../../constants/routes';
import ServerObject from '../../types/Server/ServerObject';
import ServerUserListHeader from './ServerUserListHeader';

/**
 * Homepage for a given server.
 */
const ServerStructure = ({ className }) => {
  const match = useRouteMatch();
  const { serverId } = match.params;
  const URL = `${process.env.REACT_APP_API_URL}/servers/${serverId}`;

  return (
    <NarrowContainer className={className}>
      <BackLink to={`${routes.ROOT}${routes.SERVER}`}>Server list</BackLink>

      <LoadedContent url={URL} errorMessage="Error fetching server">
        {(data) => {
          const server = new ServerObject(data);
          const highestLeet = server.users.sort(
            (a, b) => b.counts?.LEET - a.counts?.LEET,
          )[0].counts.LEET;

          return (
            <>
              <EntitySummary
                name={server.name}
                avatarUrl={server.iconUrl}
                counts={server.counts}
              />

              <ServerUserListHeader />

              {server.users
                .sort((a, b) => b.counts?.LEET - a.counts?.LEET)
                .map((user, index) => (
                  <ServerUserPreview
                    user={user}
                    key={user.id}
                    index={index}
                    max={highestLeet}
                  />
                ))}
            </>
          );
        }}
      </LoadedContent>
    </NarrowContainer>
  );
};

const Server = styled(ServerStructure)`
  padding: 1rem;
`;

ServerStructure.propTypes = {
  className: PropTypes.string,
};

export default Server;
