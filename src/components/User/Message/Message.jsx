import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import MessageObject from '../../../types/User/MessageObject';
import MessageDate from './MessageDate';
import MessageTime from './MessageTime';

/**
 * Displays a message.
 */
const MessageStructure = ({ message, className }) => {
  const { createdAt } = message;

  return (
    <div className={className}>
      <p>{message.type}</p>
      <MessageDate date={createdAt} />
      <MessageTime date={createdAt} />
    </div>
  );
};

const Message = styled(MessageStructure)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: auto;

  & > * {
    width: 33%;
  }
`;

MessageStructure.propTypes = {
  message: PropTypes.instanceOf(MessageObject),
  className: PropTypes.string,
};

export default Message;
