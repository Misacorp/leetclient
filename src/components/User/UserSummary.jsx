import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Avatar from './Avatar/Avatar';
import Counter from './Counter/Counter';
import PrimaryCounters from './PrimaryCounters';
import SecondaryCounters from './SecondaryCounters';

import UserObject from '../../types/User/UserObject';

/**
 * User summary.
 * Displays their name, avatar and a summary of their stats.
 * @prop {UserObject} user User object
 */
const UserSummaryStructure = ({ user, className }) => {
  return (
    <div className={className}>
      <Avatar user={user} />

      <h1>{user.name}</h1>

      <PrimaryCounters>
        <Counter type="LEET" amount={user.counts.LEET} />
      </PrimaryCounters>

      <SecondaryCounters>
        <Counter type="LEEB" amount={user.counts.LEEB} />
        <Counter type="FAILED_LEET" amount={user.counts.FAILED_LEET} />
      </SecondaryCounters>
    </div>
  );
};

const UserSummary = styled(UserSummaryStructure)`
  position: relative;
  top: 0;
  margin-top: 8rem;
  padding-top: 7rem;
  padding-bottom: 2rem;
  background-color: ${({ theme }) => theme.palette.primary.darker}54;
  text-align: center;

  h1 {
    margin-bottom: 1rem;
  }
`;

UserSummaryStructure.propTypes = {
  user: PropTypes.instanceOf(UserObject),
  className: PropTypes.string,
};

export default UserSummary;
