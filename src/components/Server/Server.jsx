import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import LoadedContent from '../generic/LoadedContent';
import ServerUser from './ServerUser';

import ServerObject from '../../types/Server/ServerObject';

/**
 * Homepage for a given server.
 */
const ServerStructure = ({ match, className }) => {
  const { serverId } = match.params;

  const URL = `${process.env.REACT_APP_API_URL}/servers/${serverId}`;

  return (
    <LoadedContent url={URL} errorMessage="Error fetching server">
      {(data) => {
        const server = new ServerObject(data);

        return (
          <div className={className}>
            <h1>{server.name}</h1>

            {server.users
              .sort((a, b) => b.counts?.LEET - a.counts?.LEET)
              .map((user) => (
                <ServerUser user={user} key={user.id} />
              ))}
          </div>
        );
      }}
    </LoadedContent>
  );
};

const Server = styled(ServerStructure)``;

ServerStructure.propTypes = {
  match: PropTypes.object,
  className: PropTypes.string,
};

export default Server;
