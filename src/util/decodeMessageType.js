/**
 * Translates a message type to a more human readable string
 * @param {string} type Message type
 */
const decodeMessageType = (type) => {
  switch (type) {
    case 'LEET':
      return 'leet';
    case 'LEEB':
      return 'leeb';
    case 'FAILED_LEET':
      return 'failed leet';
    default:
      throw new Error('Unknown message type');
  }
};

export default decodeMessageType;
