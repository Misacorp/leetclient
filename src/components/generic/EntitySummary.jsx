import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Avatar from '../User/Avatar/Avatar';
import Counter from '../User/Counter/Counter';
import PrimaryCounters from '../User/PrimaryCounters';
import SecondaryCounters from '../User/SecondaryCounters';

import LongestStreak from '../User/Stats/LongestStreak';

/**
 * Summary of an entity (user, server, etc.)
 * Displays their name, avatar and a summary of their stats.
 */
const EntitySummaryStructure = ({
  name,
  avatarUrl,
  counts,
  messages,
  className,
}) => {
  return (
    <div className={className}>
      <Avatar name={name} url={avatarUrl} />

      <h1>{name}</h1>

      <PrimaryCounters>
        <Counter type="LEET" amount={counts.LEET} />
      </PrimaryCounters>

      <SecondaryCounters>
        <Counter type="LEEB" amount={counts.LEEB} />
        <Counter type="FAILED_LEET" amount={counts.FAILED_LEET} />
      </SecondaryCounters>

      {messages && <LongestStreak messages={messages} />}
    </div>
  );
};

const EntitySummary = styled(EntitySummaryStructure)`
  position: relative;
  top: 0;
  margin-top: 8rem;
  padding-top: 7rem;
  padding-bottom: 2rem;
  background-color: ${({ theme }) => theme.palette.primary.darker}54;
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    margin-bottom: 1rem;
  }
`;

EntitySummaryStructure.propTypes = {
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  counts: PropTypes.object.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
};

export default EntitySummary;
