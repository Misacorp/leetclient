import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import Message from './Message/Message';
import MessageListHeaders from './MessageListHeaders';

import MessageObject from '../../../../types/User/MessageObject';

/**
 * Displays messages in a list.
 * @prop {Array} messages Array of messages to display
 */
const MessageListStructure = ({ messages, className }) => {
  return (
    <div className={className}>
      <MessageListHeaders />

      {messages.map((msg) => (
        <Message key={msg.id} message={msg} />
      ))}
    </div>
  );
};

const MessageList = styled(MessageListStructure)``;

MessageListStructure.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.instanceOf(MessageObject)),
  className: PropTypes.string,
};

export default MessageList;
