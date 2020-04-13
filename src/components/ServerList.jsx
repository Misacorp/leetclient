import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Link from './generic/Link';

import ServerListObject from '../types/ServerList/ServerListObject';
import apiRequest from '../services/apiRequest';

// Place to get the list of servers from.
const serverListUrl = `${process.env.REACT_APP_API_URL}/servers`;

/**
 * Server list.
 */
const ServerListStructure = ({ match, className }) => {
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
    <div className={className}>
      <h1>Server browser</h1>

      {servers.map((server) => (
        <div key={server.id}>
          <img src={server.iconUrl} alt={`Server icon for ${server.name}`} />
          <Link to={`${match.url}/${server.id}`}>{server.name}</Link>
        </div>
      ))}
    </div>
  );
};

const ServerList = styled(ServerListStructure)``;

ServerListStructure.propTypes = {
  match: PropTypes.object,
  className: PropTypes.string,
};

export default ServerList;
