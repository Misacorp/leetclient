import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
      <Link to={`${routes.ROOT}${routes.SERVER}`}>Server list</Link>

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

const Server = styled(ServerStructure)``;

ServerStructure.propTypes = {
  match: PropTypes.object,
  className: PropTypes.string,
};

export default Server;
