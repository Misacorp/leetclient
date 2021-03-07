import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import Frontpage from './Frontpage';
import ServerList from './ServerList/ServerList';
import Server from './Server/Server';
import User from './User/User';

import { SERVER, USER } from '../constants/routes';

const MainStructure = ({ match, className }) => {
  const currentPath = match.url.replace(/\/$/, '');

  return (
    <div className={className}>
      <Switch>
        <Route
          exact
          path={`${currentPath}/${SERVER}/:serverId/${USER}/:userId`}
        >
          <User />
        </Route>

        <Route exact path={`${currentPath}/${SERVER}/:serverId`}>
          <Server />
        </Route>

        <Route exact path={`${currentPath}/${SERVER}`}>
          <ServerList />
        </Route>

        <Route path={`${currentPath}`}>
          <Frontpage />
        </Route>

        <Redirect to={currentPath} />
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
