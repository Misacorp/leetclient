import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * Message date
 * @prop {Date} date Message creation date.
 */
const MessageDateStructure = ({ date, className }) => {
  return <div className={className}>{date.toLocaleDateString('fi-FI')}</div>;
};

const MessageDate = styled(MessageDateStructure)``;

MessageDateStructure.propTypes = {
  date: PropTypes.instanceOf(Date),
  className: PropTypes.string,
};

export default MessageDate;
