import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import UserObject from '../../../types/User/UserObject';
import StatTracker from './StatTracker';

import addEmptyMessagesToAbsentDates from '../../../util/addEmptyMessagesToAbsentDates';

const LongestStreakStructure = ({ user, className }) => {
  let longestStreak = 0;
  let currentStreak = 0;

  const messages = addEmptyMessagesToAbsentDates(user.messages);

  for (let i = 0; i < messages.length; i += 1) {
    const current = messages[i];

    if (current.type === 'LEET') {
      currentStreak += 1;
    } else {
      longestStreak = Math.max(longestStreak, currentStreak);
      currentStreak = 0;
    }
  }

  return (
    <StatTracker amount={longestStreak} className={className}>
      longest leet streak
    </StatTracker>
  );
};

const LongestStreak = styled(LongestStreakStructure)``;

LongestStreakStructure.propTypes = {
  user: PropTypes.instanceOf(UserObject),
  className: PropTypes.string,
};

export default LongestStreak;
