/**
 * Represents a user and all their messages.
 */
class UserObject {
  constructor(dto) {
    this.id = dto.id;
    this.tag = dto.name;
    this.name = this.tag.slice(0, this.tag.indexOf('#'));

    this.messages = dto.messages; // Use message objects later
  }
}

export default UserObject;
