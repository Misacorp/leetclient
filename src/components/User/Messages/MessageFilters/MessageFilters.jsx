import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import MessageObject from '../../../../types/User/MessageObject';
import TextSelect from '../../../generic/TextSelect/TextSelect';

import OptionObject from '../../../../types/OptionObject';
import addEmptyMessagesToAbsentDates from '../../../../util/addEmptyMessagesToAbsentDates';

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
      const messagesWithEmptyDates = addEmptyMessagesToAbsentDates(messages);

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
