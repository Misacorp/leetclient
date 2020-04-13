import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import MessageDate from './MessageDate';
import MessageTime from './MessageTime';
import LeetMessage from './LeetMessage';
import LeebMessage from './LeebMessage';
import FailedLeetMessage from './FailedLeetMessage';

import MessageObject from '../../../../../types/User/MessageObject';
import EmptyMessage from './EmptyMessage';

/**
 * Displays a message.
 */
const MessageStructure = ({ message, className }) => {
  const { createdAt } = message;

  const content = (
    <>
      <span>{message.type}</span>
      <MessageDate date={createdAt} />
      <MessageTime date={createdAt} />
    </>
  );

  switch (message.type) {
    case 'LEET':
      return <LeetMessage className={className}>{content}</LeetMessage>;
    case 'LEEB':
      return <LeebMessage className={className}>{content}</LeebMessage>;
    case 'FAILED_LEET':
      return (
        <FailedLeetMessage className={className}>{content}</FailedLeetMessage>
      );
    default:
      return (
        <EmptyMessage className={className}>
          <span>-</span>
          <MessageDate date={createdAt} />
          <span>-</span>
        </EmptyMessage>
      );
  }
};

const Message = styled(MessageStructure)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: auto;

  border-left-width: 10px;
  border-left-style: solid;

  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 1rem;
  color: ${({ theme }) => theme.palette.typography.light};

  margin-bottom: 4px;
`;

MessageStructure.propTypes = {
  message: PropTypes.instanceOf(MessageObject),
  className: PropTypes.string,
};

export default Message;
