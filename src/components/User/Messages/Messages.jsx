import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import MessageFilters from './MessageFilters/MessageFilters';
import MessageList from './MessageList/MessageList';

import MessageObject from '../../../types/User/MessageObject';

const MessagesStructure = ({ messages = [], className }) => {
  const [filteredMessages, setFilteredMessages] = useState(messages);

  // Messages are displayed in descending order by date.
  const descendingMessages = [...filteredMessages].sort(
    (a, b) => b.createdAt - a.createdAt,
  );

  return (
    <div className={className}>
      <MessageFilters
        messages={messages}
        updateMessages={setFilteredMessages}
      />

      <MessageList messages={descendingMessages} />
    </div>
  );
};

const Messages = styled(MessagesStructure)``;

MessagesStructure.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.instanceOf(MessageObject)),
  className: PropTypes.string,
};

export default Messages;
