import MessageObject from '../types/User/MessageObject';

/**
 * Message arrays do not contain any records for dates where a message was not posted.
 * This function fills the gaps with empty messages.
 * @param {Array} messages Array of messages
 */
const addEmptyMessagesToAbsentDates = (messages) => {
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

  return messagesWithEmptyDates;
};

export default addEmptyMessagesToAbsentDates;
