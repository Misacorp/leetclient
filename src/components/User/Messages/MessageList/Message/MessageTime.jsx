import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

/**
 * Message time
 * @prop {Date} date Message creation date.
 */
const MessageTimeStructure = ({ date, className }) => {
  // Add leading zeroes to the displayed millisecond string if necessary
  const ms = date.getMilliseconds();
  let msString = `${ms}`;
  if (ms < 10) {
    msString = `00${ms}`;
  } else if (ms < 100) {
    msString = `0${ms}`;
  }

  return (
    <span className={className}>
      {`${date.toLocaleTimeString('sv-SE')}.${msString}`}
    </span>
  );
};

const MessageTime = styled(MessageTimeStructure)`
  display: block;
`;

MessageTimeStructure.propTypes = {
  date: PropTypes.instanceOf(Date),
  className: PropTypes.string,
};

export default MessageTime;
