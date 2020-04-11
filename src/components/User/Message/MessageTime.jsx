import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * Message time
 * @prop {Date} date Message creation date.
 */
const MessageTimeStructure = ({ date, className }) => {
  return (
    <div className={className}>
      {`${date.toLocaleTimeString('fi-FI')}.${date.getMilliseconds()}`}
    </div>
  );
};

const MessageTime = styled(MessageTimeStructure)``;

MessageTimeStructure.propTypes = {
  date: PropTypes.instanceOf(Date),
  className: PropTypes.string,
};

export default MessageTime;
