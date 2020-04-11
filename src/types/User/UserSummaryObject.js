/**
 * Represents a user.
 */
class UserObject {
  constructor(dto) {
    this.id = dto.id;
    this.name = dto.name;
    this.counts = dto.counts;
  }
}

export default UserObject;
