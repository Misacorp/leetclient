import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';

import Link from '../generic/Link';

import ServerPreviewObject from '../../types/ServerList/ServerPreviewObject';

/**
 * Preview of a server in a list view.
 * @param {ServerListObject} server    Server
 * @param {string}           className Class name
 * @return {JSX.Element}
 * @constructor
 */
const ServerListItemStructure = ({ server, className }) => {
  const match = useRouteMatch();

  return (
    <Link to={`${match.url}/${server.id}`} className={className}>
      <img src={server.iconUrl} alt={`Server icon for ${server.name}`} />
      <h4>{server.name}</h4>
    </Link>
  );
};

ServerListItemStructure.propTypes = {
  server: PropTypes.instanceOf(ServerPreviewObject),
  className: PropTypes.string,
};

const ServerListItem = styled(ServerListItemStructure)`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-auto-rows: auto;
  grid-gap: 1rem;
  overflow: hidden;

  margin-bottom: 4px;
  padding: 0;
  background-color: #00000033;
  align-items: center;

  img {
    transform: translateX(-10%);
    transition: transform 0.2s ease-out;
  }

  &,
  &:visited {
    color: ${({ theme }) => theme.palette.typography.light};
  }

  &:focus,
  &:active,
  &:hover {
    color: ${({ theme }) => theme.palette.typography.light};
    background-color: ${({ theme }) => theme.palette.primary.main}80;

    img {
      transform: translateX(0);
    }
  }

  h4 {
    margin: 0;
  }
`;

export default ServerListItem;
