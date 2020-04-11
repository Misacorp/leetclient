/**
 * Represents a message sent to the server.
 */
class MessageObject {
  constructor(dto) {
    this.id = dto.id;
    this.type = dto.type;
    this.createdAt = new Date(dto.createdAt);
  }
}

export default MessageObject;
