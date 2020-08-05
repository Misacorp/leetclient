import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const MessageListHeadersStructure = ({ className }) => {
  return (
    <div className={className}>
      <span>Type</span>
      <span>Date</span>
      <span>Time</span>
    </div>
  );
};

const MessageListHeaders = styled(MessageListHeadersStructure)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: auto;

  border-left-width: 10px;
  border-left-style: solid;

  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;

  color: ${({ theme }) => theme.palette.secondary.light};
  font-size: ${({ theme }) => theme.typography.sizes[200]};
  text-transform: uppercase;
  font-weight: 600;

  border-color: transparent;
`;

MessageListHeadersStructure.propTypes = {
  className: PropTypes.string,
};

export default MessageListHeaders;
