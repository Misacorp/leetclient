/**
 * Represents a user.
 */
class UserObject {
  constructor(dto) {
    this.id = dto.id;
    this.tag = dto.name;
    this.name = this.tag.slice(0, this.tag.indexOf('#'));
    this.counts = dto.counts;
  }
}

export default UserObject;
