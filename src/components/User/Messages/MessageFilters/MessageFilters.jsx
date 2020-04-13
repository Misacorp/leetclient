import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import MessageObject from '../../../../types/User/MessageObject';
import TextSelect from '../../../generic/TextSelect/TextSelect';

import OptionObject from '../../../../types/OptionObject';

// Options for the missed dates filter.
const options = [new OptionObject('yes', 'yes'), new OptionObject('no', 'no')];

/**
 * Displays and controls filters for a message list.
 */
const MessageFiltersStructure = ({ messages, updateMessages, className }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  /**
   * Handle option selection
   * @param {OptionObject} newOption Option to be selected
   */
  const handleSelect = (newOption) => {
    if (selectedOption !== newOption) {
      setSelectedOption(newOption);
    }
  };

  // Handle adding empty messages in place of missing dates
  useEffect(() => {
    if (selectedOption.value === 'yes') {
      const messagesByDate = [...messages].sort(
        (a, b) => a.createdAt - b.createdAt,
      );
      const oldestMessage = new MessageObject(messagesByDate[0]);

      // Value to return
      const messagesWithEmptyDates = [];

      const today = new Date();

      // This date will travel from the oldest message to the present day
      const date = oldestMessage.createdAt;
      date.setHours(0, 0, 0, 0);

      let index = 0;

      // Loop through days from the oldest message's date to the current date
      while (date < today) {
        const currentMessage = messagesByDate[index];

        if (
          currentMessage &&
          currentMessage.createdAt.getYear() === date.getYear() &&
          currentMessage.createdAt.getMonth() === date.getMonth() &&
          currentMessage.createdAt.getDate() === date.getDate()
        ) {
          // There is a message for this date
          messagesWithEmptyDates.push(currentMessage);
          index += 1; // Bump the index up by one since this message has already been used
        } else {
          // No message for this date
          messagesWithEmptyDates.push(
            new MessageObject({
              id: date.getTime(),
              type: 'EMPTY',
              createdAt: date,
            }),
          );
        }

        // Proceed to the next date
        date.setDate(date.getDate() + 1);
      }

      updateMessages(messagesWithEmptyDates);
    } else {
      updateMessages(messages);
    }
  }, [messages, selectedOption, updateMessages]);

  return (
    <div className={className}>
      <TextSelect
        options={options}
        selected={selectedOption}
        updateSelected={handleSelect}
        label="Show missed dates"
      />
    </div>
  );
};

const MessageFilters = styled(MessageFiltersStructure)`
  background-color: ${({ theme }) => theme.palette.primary.main}33;
  padding: 0.5rem 1rem;
  margin-bottom: 1.5rem;
`;

MessageFiltersStructure.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.instanceOf(MessageObject)).isRequired,
  updateMessages: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default MessageFilters;
