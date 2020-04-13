import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * Message time
 * @prop {Date} date Message creation date.
 */
const MessageTimeStructure = ({ date, className }) => {
  return (
    <span className={className}>
      {`${date.toLocaleTimeString('sv-SE')}.${date.getMilliseconds()}`}
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
