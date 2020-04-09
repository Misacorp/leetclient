import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import ServerList from './ServerList';
import Server from './Server/Server';

import { SERVER } from '../constants/routes';

const MainStructure = ({ match, className }) => {
  const currentPath = match.url.replace(/\/$/, '');

  return (
    <div className={className}>
      <p>Leetbot stats</p>

      <Switch>
        <Route
          exact
          path={`${currentPath}/${SERVER}/:serverId`}
          component={Server}
        />
        <Route exact path={`${currentPath}/${SERVER}`} component={ServerList} />
        <Redirect to={`${currentPath}/${SERVER}`} />
      </Switch>
    </div>
  );
};

const Main = styled(MainStructure)``;

MainStructure.propTypes = {
  match: PropTypes.object,
  className: PropTypes.string,
};

export default Main;
