import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import UserObject from '../../types/UserObject';

const ServerUserStructure = ({ user, className }) => {
  return (
    <div className={className}>
      <h4>{user.name}</h4>

      {user.counts?.LEET > 0 && <p>Leets: {user.counts?.LEET}</p>}

      {user.counts?.LEEB > 0 && <p>Leebs: {user.counts?.LEEB}</p>}

      {user.counts?.FAILED_LEET > 0 && (
        <p>Failed leets: {user.counts?.FAILED_LEET}</p>
      )}
    </div>
  );
};

const ServerUser = styled(ServerUserStructure)`
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.16);
  background-color: #f7f7f7;

  h4 {
    margin: 0;
  }
`;

ServerUserStructure.propTypes = {
  user: PropTypes.instanceOf(UserObject).isRequired,
  className: PropTypes.string,
};

export default ServerUser;
