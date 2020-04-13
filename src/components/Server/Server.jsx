import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import BackLink from '../generic/BackLink';
import LoadedContent from '../generic/LoadedContent';
import ServerUserPreview from './ServerUserPreview';

import * as routes from '../../constants/routes';
import ServerObject from '../../types/Server/ServerObject';

/**
 * Homepage for a given server.
 */
const ServerStructure = ({ match, className }) => {
  const { serverId } = match.params;
  const URL = `${process.env.REACT_APP_API_URL}/servers/${serverId}`;

  return (
    <div className={className}>
      <BackLink to={`${routes.ROOT}${routes.SERVER}`}>Server list</BackLink>

      <LoadedContent url={URL} errorMessage="Error fetching server">
        {(data) => {
          const server = new ServerObject(data);

          return (
            <>
              <h1>{server.name}</h1>

              {server.users
                .sort((a, b) => b.counts?.LEET - a.counts?.LEET)
                .map((user) => (
                  <ServerUserPreview user={user} key={user.id} match={match} />
                ))}
            </>
          );
        }}
      </LoadedContent>
    </div>
  );
};

const Server = styled(ServerStructure)`
  padding: 1rem;
`;

ServerStructure.propTypes = {
  match: PropTypes.object,
  className: PropTypes.string,
};

export default Server;
