import MessageObject from './MessageObject';

/**
 * Represents a user and all their messages.
 */
class UserObject {
  constructor(dto) {
    this.id = dto.id;
    this.tag = dto.name;
    this.name = this.tag.slice(0, this.tag.indexOf('#'));
    this.avatarUrl = dto.avatarUrl;

    this.messages = dto.messages.map((msg) => new MessageObject(msg));

    this.counts = {
      LEET: 0,
      LEEB: 0,
      FAILED_LEET: 0,
    };
    this.messages.forEach((msg) => {
      this.counts[msg.type] += 1;
    });
  }
}

export default UserObject;
