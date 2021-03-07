import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import NarrowContainer from '../generic/Containers/NarrowContainer';
import ServerListItem from './ServerListItem';
import BackLink from '../generic/BackLink';

import ServerListObject from '../../types/ServerList/ServerListObject';
import apiRequest from '../../services/apiRequest';
import * as routes from '../../constants/routes';

// Place to get the list of servers from.
const serverListUrl = `${process.env.REACT_APP_API_URL}/servers`;

/**
 * Server list.
 */
const ServerListStructure = ({ className }) => {
  const [servers, setServers] = useState([]);

  /**
   * Fetches a list of servers from the... server.
   */
  const fetchServers = useCallback(async () => {
    const response = await apiRequest(serverListUrl);
    setServers(new ServerListObject(response).servers);
  }, []);

  // Fetch servers on mount.
  useEffect(() => {
    fetchServers();
  }, [fetchServers]);

  // Rudimentary error for cases where the .env file's content was not loaded properly.
  if (typeof process.env.REACT_APP_API_URL === 'undefined') {
    return (
      <p>
        <strong>Warning!</strong> API URL is not defined.
      </p>
    );
  }

  return (
    <NarrowContainer className={className}>
      <BackLink to={routes.ROOT}>Frontpage</BackLink>

      <h1>Server browser</h1>

      {servers.map((server) => (
        <ServerListItem server={server} key={server.id} />
      ))}
    </NarrowContainer>
  );
};

const ServerList = styled(ServerListStructure)`
  h1 {
    text-align: center;
  }
`;

ServerListStructure.propTypes = {
  className: PropTypes.string,
};

export default ServerList;
